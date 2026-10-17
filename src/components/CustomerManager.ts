import type { Customer, CustomerMood, DishType, OrderItem } from '../types';
import { sounds } from '../audio';
import { storage } from '../storage';
import { AVATARS, ICONS } from '../assets';

export class CustomerManager {
  private container: HTMLElement;
  private customers: (Customer | null)[] = [null, null, null]; // 3 counter slots
  private spawnTimer: number = 0;
  private spawnInterval: number = 6; // seconds
  private allowedDishes: DishType[] = ['burger', 'fries', 'drink'];
  private onCustomerServed: (reward: number, isCombo: boolean) => void;
  private onCustomerLost: () => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onCustomerServed: (reward: number, isCombo: boolean) => void;
      onCustomerLost: () => void;
    }
  ) {
    this.container = container;
    this.onCustomerServed = callbacks.onCustomerServed;
    this.onCustomerLost = callbacks.onCustomerLost;
  }

  private currentLevel: number = 1;

  setAllowedDishes(dishes: DishType[]) {
    this.allowedDishes = dishes;
  }

  setSpawnInterval(interval: number) {
    this.spawnInterval = interval;
  }

  setLevel(level: number) {
    this.currentLevel = level;
  }

  reset() {
    this.customers = [null, null, null];
    this.spawnTimer = 1.0; // spawn first customer quickly
    this.render();
  }

  update(deltaTime: number) {
    // Spawn check
    this.spawnTimer -= deltaTime;
    if (this.spawnTimer <= 0) {
      this.spawnCustomer();
      this.spawnTimer = this.spawnInterval + Math.random() * 2;
    }

    // Update customer patience
    let updated = false;
    const patienceBonus = (storage.getUpgrade('radio_jukebox')?.level || 1) > 1 ? 1.3 : 1.0;

    for (let i = 0; i < this.customers.length; i++) {
      const cust = this.customers[i];
      if (cust) {
        cust.currentPatience -= (deltaTime / patienceBonus);
        const ratio = cust.currentPatience / cust.maxPatience;

        let newMood: CustomerMood = 'happy';
        if (ratio <= 0.25) {
          newMood = 'angry';
          if (Math.random() < 0.05) sounds.playBurnWarning();
        } else if (ratio <= 0.55) {
          newMood = 'impatient';
        }

        if (newMood !== cust.mood) {
          cust.mood = newMood;
          updated = true;
        }

        if (cust.currentPatience <= 0) {
          // Customer angry leaves
          sounds.playTrash();
          this.customers[i] = null;
          this.onCustomerLost();
          updated = true;
        }
      }
    }

    // Update patience bars smoothly in DOM
    this.updatePatienceDOM();

    if (updated) {
      this.render();
    }
  }

  private spawnCustomer() {
    // Find empty slot
    const emptyIndices: number[] = [];
    this.customers.forEach((c, idx) => {
      if (c === null) emptyIndices.push(idx);
    });

    if (emptyIndices.length === 0) return;

    const slot = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const avatarId = Math.floor(Math.random() * 4);

    // Progressive difficulty: higher levels order more items
    let orderCount = 1;
    if (this.currentLevel <= 2) {
      orderCount = Math.random() < 0.75 ? 1 : 2;
    } else if (this.currentLevel <= 5) {
      orderCount = Math.random() < 0.35 ? 1 : 2;
    } else if (this.currentLevel <= 7) {
      orderCount = Math.random() < 0.15 ? 1 : Math.random() < 0.75 ? 2 : 3;
    } else {
      // Levels 8-10: Rush hour with complex multi-dish orders!
      orderCount = Math.random() < 0.35 ? 2 : 3;
    }
    const orders: OrderItem[] = [];

    // Base pricing
    const meatLevel = storage.getUpgrade('meat_quality')?.level || 1;
    const hotdogLevel = storage.getUpgrade('hotdog_sausage')?.level || 1;
    const burgerPrice = 25 + (meatLevel - 1) * 10;
    const hotdogPrice = 20 + (hotdogLevel - 1) * 8;
    const friesPrice = 15;
    const drinkPrice = 12;

    for (let i = 0; i < orderCount; i++) {
      const dish = this.allowedDishes[Math.floor(Math.random() * this.allowedDishes.length)];
      let price = burgerPrice;
      if (dish === 'hotdog') price = hotdogPrice;
      else if (dish === 'fries') price = friesPrice;
      else if (dish === 'drink') price = drinkPrice;

      orders.push({
        id: `ord_${Date.now()}_${Math.random()}`,
        type: dish,
        price,
        isDelivered: false
      });
    }

    const customer: Customer = {
      id: `cust_${Date.now()}_${Math.random()}`,
      name: ['Mijoz Aysha', 'Mijoz Dilnoza', 'Bobo Karim', 'Mijoz Alisher'][avatarId],
      avatarId,
      slotIndex: slot,
      orders,
      maxPatience: 60, // Exactly 1 minute as requested
      currentPatience: 60,
      mood: 'happy',
      tipMultiplier: 1.0
    };

    this.customers[slot] = customer;
    sounds.playBell();
    this.render();
  }

  /**
   * Attempts to serve an item to the best waiting customer
   * Returns true if successfully served
   */
  deliverDish(dishType: DishType, toppings?: { hasCheese?: boolean; hasLettuce?: boolean }): boolean {
    // Find customer who has this dish in their undelivered orders
    // Prioritize customer with lowest remaining patience
    let targetCustomer: Customer | null = null;
    let targetSlot = -1;
    let lowestPatience = Infinity;

    this.customers.forEach((cust, slot) => {
      if (!cust) return;
      const hasOrder = cust.orders.some(o => !o.isDelivered && o.type === dishType);
      if (hasOrder && cust.currentPatience < lowestPatience) {
        lowestPatience = cust.currentPatience;
        targetCustomer = cust;
        targetSlot = slot;
      }
    });

    if (!targetCustomer) {
      return false;
    }

    const orderToDeliver = (targetCustomer as Customer).orders.find(o => !o.isDelivered && o.type === dishType);
    if (!orderToDeliver) return false;

    orderToDeliver.isDelivered = true;
    sounds.playServe();

    // Check if customer order is completely filled
    const allDone = (targetCustomer as Customer).orders.every(o => o.isDelivered);

    if (allDone) {
      // Calculate tip based on patience ratio
      const patienceRatio = (targetCustomer as Customer).currentPatience / (targetCustomer as Customer).maxPatience;
      let baseReward = (targetCustomer as Customer).orders.reduce((sum, o) => sum + o.price, 0);

      // Add extra bonus if burger has cheese and lettuce!
      let toppingBonus = 0;
      let toppingTag = '';
      if (dishType === 'burger' && toppings) {
        if (toppings.hasCheese && toppings.hasLettuce) {
          toppingBonus = 20;
          toppingTag = '🧀🥗 Deluxe';
        } else if (toppings.hasCheese) {
          toppingBonus = 10;
          toppingTag = '🧀 Pishloq';
        } else if (toppings.hasLettuce) {
          toppingBonus = 10;
          toppingTag = '🥗 Salat';
        }
      }

      const tip = Math.round(baseReward * patienceRatio * 0.5) + toppingBonus;
      const totalReward = baseReward + tip;

      sounds.playCoin();

      // Show floating reward text
      this.showRewardFloat(targetSlot, totalReward, toppingTag || (tip > 0 ? 'Tezkor!' : ''));

      // Customer leaves happy
      setTimeout(() => {
        this.customers[targetSlot] = null;
        this.onCustomerServed(totalReward, patienceRatio > 0.6);
        this.render();
      }, 400);
    } else {
      sounds.playClick();
      this.render();
    }

    return true;
  }

  private showRewardFloat(slot: number, amount: number, tipLabel: string) {
    const slotEl = this.container.querySelector(`.customer-slot[data-slot="${slot}"]`);
    if (!slotEl) return;

    const floatEl = document.createElement('div');
    floatEl.className = 'floating-coin-text';
    floatEl.innerHTML = `+$${amount} 🪙 ${tipLabel ? `<span class="tip-tag">${tipLabel}</span>` : ''}`;
    slotEl.appendChild(floatEl);

    setTimeout(() => {
      floatEl.remove();
    }, 1200);
  }

  private updatePatienceDOM() {
    this.customers.forEach((cust, idx) => {
      if (!cust) return;
      const bar = this.container.querySelector(`.patience-fill[data-slot="${idx}"]`) as HTMLElement;
      const label = this.container.querySelector(`.patience-sec[data-slot="${idx}"]`) as HTMLElement;
      if (bar) {
        const pct = Math.max(0, Math.min(100, (cust.currentPatience / cust.maxPatience) * 100));
        bar.style.height = `${pct}%`;
        if (pct > 50) {
          bar.style.backgroundColor = '#48bb78';
        } else if (pct > 25) {
          bar.style.backgroundColor = '#ecc94b';
        } else {
          bar.style.backgroundColor = '#f56565';
        }
      }
      if (label) {
        label.textContent = `${Math.ceil(cust.currentPatience)}s`;
      }
    });
  }

  render() {
    this.container.innerHTML = `
      <div class="customers-counter-row">
        ${[0, 1, 2].map(slotIdx => {
          const cust = this.customers[slotIdx];
          if (!cust) {
            return `
              <div class="customer-slot empty" data-slot="${slotIdx}">
                <div class="empty-stand-indicator"></div>
              </div>
            `;
          }

          const avatarSvg = AVATARS[cust.avatarId](cust.mood);
          const patiencePct = Math.round((cust.currentPatience / cust.maxPatience) * 100);

          return `
            <div class="customer-slot active" data-slot="${slotIdx}">
              <!-- Order Speech Bubble -->
              <div class="order-bubble ${cust.mood}">
                ${cust.orders.map(order => {
                  let iconSvg = ICONS.completeBurger;
                  if (order.type === 'hotdog') iconSvg = ICONS.completeHotdog;
                  else if (order.type === 'fries') iconSvg = ICONS.frenchFries;
                  else if (order.type === 'drink') iconSvg = ICONS.coldDrink;
                  else if (order.type === 'pizza') iconSvg = ICONS.pizza;
                  else if (order.type === 'nachos') iconSvg = ICONS.nachos;

                  return `
                    <div class="bubble-dish-item ${order.isDelivered ? 'delivered' : ''}">
                      ${iconSvg}
                      ${order.isDelivered ? '<div class="check-mark">✓</div>' : ''}
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Patience Bar (Vertical meter next to customer with 60s countdown) -->
              <div class="patience-wrapper">
                <div class="patience-sec" data-slot="${slotIdx}">${Math.ceil(cust.currentPatience)}s</div>
                <div class="patience-meter">
                  <div class="patience-fill" data-slot="${slotIdx}" style="height: ${patiencePct}%"></div>
                </div>
              </div>

              <!-- Customer Character Avatar -->
              <div class="customer-avatar-box ${cust.mood}">
                ${avatarSvg}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}
