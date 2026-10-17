import type { BurgerPlate, DrinkDispenser, FryerSlot, GrillSlot, HotdogPlate } from '../types';
import { sounds } from '../audio';
import { storage } from '../storage';
import { ICONS, renderBurgerPlate } from '../assets';
import { CustomerManager } from './CustomerManager';

export class KitchenManager {
  private container: HTMLElement;
  private customerManager: CustomerManager;

  // Stations
  private grillSlots: GrillSlot[] = [];
  private burgerPlates: BurgerPlate[] = [];
  private hotdogPlates: HotdogPlate[] = [];
  private fryer: FryerSlot = { id: 0, state: 'empty', progress: 0, readyPortions: 1, maxPortions: 3 };
  private drinkDispenser: DrinkDispenser = { id: 0, state: 'ready', progress: 1, hasReadyCup: true };

  // Cooking timing
  private cookTime = 4.0; // seconds for patty to cook
  private burnTime = 6.0; // seconds after cooked before burning
  private fryTime = 5.0; // seconds for fries

  constructor(container: HTMLElement, customerManager: CustomerManager) {
    this.container = container;
    this.customerManager = customerManager;
    this.initStations();
  }

  initStations() {
    // Determine slot count based on upgrades
    const grillUpgrade = storage.getUpgrade('grill_slots')?.level || 1;
    const numGrillSlots = grillUpgrade === 1 ? 2 : grillUpgrade === 2 ? 4 : 6;

    this.grillSlots = Array.from({ length: numGrillSlots }, (_, i) => ({
      id: i,
      state: 'empty' as unknown as any,
      progress: 0,
      burnProgress: 0,
      cookingDuration: this.cookTime,
      burnDuration: this.burnTime
    }));

    // 4 Burger plates on central table
    this.burgerPlates = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      hasBottomBun: false,
      hasPatty: false,
      hasCheese: false,
      hasLettuce: false,
      hasTopBun: false,
      isComplete: false
    }));

    // 2 Hotdog plates
    this.hotdogPlates = Array.from({ length: 2 }, (_, i) => ({
      id: i,
      hasBun: false,
      hasSausage: false,
      hasMustard: false,
      isComplete: false
    }));

    this.fryer = { id: 0, state: 'empty', progress: 0, readyPortions: 1, maxPortions: 3 };
    this.drinkDispenser = { id: 0, state: 'ready', progress: 1, hasReadyCup: true };

    this.render();
  }

  update(deltaTime: number) {
    let needsRender = false;

    // Update Grill Slots
    for (const slot of this.grillSlots) {
      if (slot.state === 'cooking') {
        slot.progress += deltaTime / slot.cookingDuration;
        if (slot.progress >= 1.0) {
          slot.state = 'cooked';
          slot.progress = 1.0;
          sounds.playBell();
          needsRender = true;
        }
      } else if (slot.state === 'cooked') {
        slot.burnProgress += deltaTime / slot.burnDuration;
        if (slot.burnProgress >= 1.0) {
          slot.state = 'burnt';
          slot.burnProgress = 1.0;
          sounds.playBurnWarning();
          needsRender = true;
        }
      }
    }

    // Update Fryer
    if (this.fryer.state === 'frying') {
      this.fryer.progress += deltaTime / this.fryTime;
      if (this.fryer.progress >= 1.0) {
        this.fryer.state = 'cooked';
        this.fryer.progress = 1.0;
        this.fryer.readyPortions = Math.min(this.fryer.maxPortions, this.fryer.readyPortions + 2);
        sounds.playServe();
        needsRender = true;
      }
    }

    // Update Drink Dispenser
    if (this.drinkDispenser.state === 'filling') {
      const fastDrink = (storage.getUpgrade('drink_machine')?.level || 1) > 1;
      const fillSpeed = fastDrink ? 2.5 : 1.2;
      this.drinkDispenser.progress += deltaTime * fillSpeed;
      if (this.drinkDispenser.progress >= 1.0) {
        this.drinkDispenser.state = 'ready';
        this.drinkDispenser.hasReadyCup = true;
        this.drinkDispenser.progress = 1.0;
        sounds.playBell();
        needsRender = true;
      }
    }

    // Update progress bars directly in DOM for smooth 60fps animation
    this.updateLiveMeters();

    if (needsRender) {
      this.render();
    }
  }

  // --- User Actions ---

  // Tap Raw Patty Stack -> place on empty grill slot
  addPattyToGrill() {
    const emptySlot = this.grillSlots.find(s => (s.state as string) === 'empty' || s.state === undefined);
    if (!emptySlot) return;

    emptySlot.state = 'cooking';
    emptySlot.progress = 0;
    emptySlot.burnProgress = 0;
    sounds.playSizzle();
    this.render();
  }

  // Tap grill slot
  handleGrillSlotClick(slotId: number) {
    const slot = this.grillSlots.find(s => s.id === slotId);
    if (!slot) return;

    if (slot.state === 'burnt') {
      // Discard burnt patty to trash
      slot.state = 'empty' as any;
      slot.progress = 0;
      slot.burnProgress = 0;
      sounds.playTrash();
      this.render();
      return;
    }

    if (slot.state === 'cooked') {
      // Move to a burger plate that has a bun and needs a patty
      const targetPlate = this.burgerPlates.find(p => p.hasBottomBun && !p.hasPatty);
      if (targetPlate) {
        targetPlate.hasPatty = true;
        slot.state = 'empty' as any;
        slot.progress = 0;
        slot.burnProgress = 0;
        sounds.playClick();
        this.render();
      } else {
        // If no plate has a bun, auto-place on first empty plate with a bun!
        const emptyPlate = this.burgerPlates.find(p => !p.hasBottomBun);
        if (emptyPlate) {
          emptyPlate.hasBottomBun = true;
          emptyPlate.hasPatty = true;
          slot.state = 'empty' as any;
          slot.progress = 0;
          slot.burnProgress = 0;
          sounds.playClick();
          this.render();
        }
      }
    }
  }

  // Tap Burger Plate
  handleBurgerPlateClick(plateId: number) {
    const plate = this.burgerPlates.find(p => p.id === plateId);
    if (!plate) return;

    // If completely assembled -> Serve to customer with topping details!
    if (plate.isComplete) {
      const delivered = this.customerManager.deliverDish('burger', {
        hasCheese: plate.hasCheese,
        hasLettuce: plate.hasLettuce
      });
      if (delivered) {
        // Reset plate
        plate.hasBottomBun = false;
        plate.hasPatty = false;
        plate.hasCheese = false;
        plate.hasLettuce = false;
        plate.hasTopBun = false;
        plate.isComplete = false;
        this.render();
      }
      return;
    }

    // Step 1: If empty, place bottom bun
    if (!plate.hasBottomBun) {
      plate.hasBottomBun = true;
      sounds.playClick();
      this.render();
      return;
    }

    // Step 2: If has bottom bun, but no patty, check if cooked patty is ready on grill
    if (plate.hasBottomBun && !plate.hasPatty) {
      const cookedSlot = this.grillSlots.find(s => s.state === 'cooked');
      if (cookedSlot) {
        plate.hasPatty = true;
        cookedSlot.state = 'empty' as any;
        cookedSlot.progress = 0;
        cookedSlot.burnProgress = 0;
        sounds.playClick();
        this.render();
        return;
      }
    }

    // Step 3: If has patty, sequential topping on tap: Cheese -> Lettuce -> Top Bun
    if (plate.hasBottomBun && plate.hasPatty && !plate.isComplete) {
      if (!plate.hasCheese) {
        plate.hasCheese = true;
        sounds.playCheese();
      } else if (!plate.hasLettuce) {
        plate.hasLettuce = true;
        sounds.playLettuce();
      } else {
        plate.hasTopBun = true;
        plate.isComplete = true;
        sounds.playServe();
      }
      this.render();
      return;
    }
  }

  // Topping buttons
  addToppingToPlate(topping: 'bun' | 'cheese' | 'lettuce' | 'topBun') {
    if (topping === 'bun') {
      const emptyPlate = this.burgerPlates.find(p => !p.hasBottomBun);
      if (emptyPlate) {
        emptyPlate.hasBottomBun = true;
        sounds.playClick();
        this.render();
      }
      return;
    }

    if (topping === 'cheese') {
      // Find plate that has patty and doesn't have cheese yet
      const plate = this.burgerPlates.find(p => p.hasBottomBun && p.hasPatty && !p.hasCheese && !p.isComplete);
      if (plate) {
        plate.hasCheese = true;
        sounds.playCheese();
        this.render();
      } else {
        // If all have cheese, try to add to any plate with bun
        const plateWithBun = this.burgerPlates.find(p => p.hasBottomBun && !p.hasCheese && !p.isComplete);
        if (plateWithBun) {
          plateWithBun.hasCheese = true;
          sounds.playCheese();
          this.render();
        }
      }
      return;
    }

    if (topping === 'lettuce') {
      // Find plate that has patty and doesn't have lettuce yet
      const plate = this.burgerPlates.find(p => p.hasBottomBun && p.hasPatty && !p.hasLettuce && !p.isComplete);
      if (plate) {
        plate.hasLettuce = true;
        sounds.playLettuce();
        this.render();
      } else {
        const plateWithBun = this.burgerPlates.find(p => p.hasBottomBun && !p.hasLettuce && !p.isComplete);
        if (plateWithBun) {
          plateWithBun.hasLettuce = true;
          sounds.playLettuce();
          this.render();
        }
      }
      return;
    }

    if (topping === 'topBun') {
      const plate = this.burgerPlates.find(p => p.hasBottomBun && p.hasPatty && !p.hasTopBun && !p.isComplete);
      if (plate) {
        plate.hasTopBun = true;
        plate.isComplete = true;
        sounds.playServe();
        this.render();
      }
      return;
    }
  }

  // Quick auto-assemble: Double-tap bun to make complete burger if cooked patty is available
  autoAssembleBurger() {
    const cookedSlot = this.grillSlots.find(s => s.state === 'cooked');
    const plate = this.burgerPlates.find(p => !p.isComplete);
    if (cookedSlot && plate) {
      plate.hasBottomBun = true;
      plate.hasPatty = true;
      plate.hasCheese = true;
      plate.hasLettuce = true;
      plate.hasTopBun = true;
      plate.isComplete = true;
      cookedSlot.state = 'empty' as any;
      sounds.playServe();
      this.render();
    }
  }

  // Tap Fryer
  handleFryerClick() {
    if (this.fryer.state === 'empty') {
      this.fryer.state = 'frying';
      this.fryer.progress = 0;
      sounds.playFryer();
      this.render();
    } else if (this.fryer.state === 'cooked' && this.fryer.readyPortions > 0) {
      // Deliver fries to customer
      const delivered = this.customerManager.deliverDish('fries');
      if (delivered) {
        this.fryer.readyPortions--;
        if (this.fryer.readyPortions <= 0) {
          this.fryer.state = 'empty';
        }
        this.render();
      }
    }
  }

  // Tap ready fries box
  serveFries() {
    if (this.fryer.readyPortions > 0) {
      const delivered = this.customerManager.deliverDish('fries');
      if (delivered) {
        this.fryer.readyPortions--;
        if (this.fryer.readyPortions <= 0 && this.fryer.state === 'cooked') {
          this.fryer.state = 'empty';
        }
        this.render();
      }
    } else {
      this.handleFryerClick();
    }
  }

  // Tap Drink Dispenser
  handleDrinkClick() {
    if (this.drinkDispenser.hasReadyCup) {
      // Deliver drink to customer
      const delivered = this.customerManager.deliverDish('drink');
      if (delivered) {
        this.drinkDispenser.hasReadyCup = false;
        this.drinkDispenser.state = 'filling';
        this.drinkDispenser.progress = 0;
        sounds.playPourDrink();
        this.render();
      }
    } else if (this.drinkDispenser.state === 'empty') {
      this.drinkDispenser.state = 'filling';
      this.drinkDispenser.progress = 0;
      sounds.playPourDrink();
      this.render();
    }
  }

  // Hotdog
  handleHotdogPlateClick(plateId: number) {
    const plate = this.hotdogPlates.find(p => p.id === plateId);
    if (!plate) return;

    if (plate.isComplete) {
      const delivered = this.customerManager.deliverDish('hotdog');
      if (delivered) {
        plate.hasBun = false;
        plate.hasSausage = false;
        plate.hasMustard = false;
        plate.isComplete = false;
        this.render();
      }
      return;
    }

    if (!plate.hasBun) {
      plate.hasBun = true;
      plate.hasSausage = true;
      sounds.playClick();
      this.render();
      return;
    }

    if (plate.hasBun && !plate.isComplete) {
      plate.hasMustard = true;
      plate.isComplete = true;
      sounds.playServe();
      this.render();
    }
  }

  private updateLiveMeters() {
    // Update circular progress or bar for grill
    this.grillSlots.forEach(slot => {
      const meter = this.container.querySelector(`.grill-meter[data-slot="${slot.id}"]`) as HTMLElement;
      if (meter) {
        if (slot.state === 'cooking') {
          meter.style.width = `${slot.progress * 100}%`;
          meter.style.backgroundColor = '#f6c23e';
        } else if (slot.state === 'cooked') {
          meter.style.width = `${(1 - slot.burnProgress) * 100}%`;
          meter.style.backgroundColor = '#48bb78';
        } else {
          meter.style.width = '0%';
        }
      }
    });

    // Fryer meter
    const fryMeter = this.container.querySelector('.fryer-meter') as HTMLElement;
    if (fryMeter) {
      if (this.fryer.state === 'frying') {
        fryMeter.style.height = `${this.fryer.progress * 100}%`;
      } else {
        fryMeter.style.height = '0%';
      }
    }

    // Drink meter
    const drinkMeter = this.container.querySelector('.drink-meter') as HTMLElement;
    if (drinkMeter) {
      if (this.drinkDispenser.state === 'filling') {
        drinkMeter.style.height = `${this.drinkDispenser.progress * 100}%`;
      } else {
        drinkMeter.style.height = '100%';
      }
    }
  }

  render() {
    this.container.innerHTML = `
      <div class="kitchen-counter-layout">

        <!-- LEFT SECTION: French Fries Deep Fryer & Soda Fountain -->
        <div class="station-side station-left">
          <!-- Fries Fryer -->
          <div class="fryer-station-card">
            <div class="station-title">Fritiyur (Fri)</div>
            <div class="fryer-box ${this.fryer.state}" id="btn-fryer">
              <div class="fryer-oil">
                <div class="oil-bubbles"></div>
              </div>
              <div class="fryer-meter"></div>
              <div class="fryer-basket">
                ${this.fryer.state === 'frying' ? '🔥 Qovurilmoqda...' : '🍟 Kartoshka solish'}
              </div>
            </div>

            <!-- Ready Fries Portions on Counter -->
            <div class="ready-fries-row">
              ${[0, 1, 2].map(idx => `
                <div class="ready-fries-item ${idx < this.fryer.readyPortions ? 'filled' : 'empty'}" data-fry="${idx}">
                  ${idx < this.fryer.readyPortions ? ICONS.frenchFries : '<div class="empty-tray"></div>'}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Cold Drink Dispenser -->
          <div class="drink-station-card">
            <div class="station-title">Kola Mashinasi</div>
            <div class="drink-dispenser-box" id="btn-drink">
              <div class="dispenser-nozzle"></div>
              <div class="dispenser-cup-slot">
                ${this.drinkDispenser.hasReadyCup ? `
                  <div class="ready-drink-cup">
                    ${ICONS.coldDrink}
                  </div>
                ` : `
                  <div class="filling-cup-wrapper">
                    <div class="drink-meter"></div>
                    <div class="empty-cup-outline">🥤 To'ldirish...</div>
                  </div>
                `}
              </div>
            </div>
          </div>
        </div>

        <!-- CENTER SECTION: Burger & Hotdog Prep Plates (Matching Image 1 & 2) -->
        <div class="station-center">
          <div class="assembly-table-card">
            <div class="station-title">
              <span>Peshtaxta (Burger & Hot-dog)</span>
              <button class="quick-prep-btn" id="btn-quick-prep" title="Tezkor Burger tayyorlash">⚡ Tez Yig'ish</button>
            </div>

            <!-- 4 Burger Plates on Table -->
            <div class="burger-plates-grid">
              ${this.burgerPlates.map(plate => `
                <div class="burger-plate-box ${plate.isComplete ? 'ready-to-serve' : ''}" data-plate="${plate.id}">
                  <div class="plate-base">
                    ${renderBurgerPlate(plate)}
                    <div class="plate-status-indicator">
                      ${plate.isComplete ? '<span class="status-badge ready">✨ TAYYOR!</span>' :
                        plate.hasPatty ? `<span class="status-badge in-progress ${plate.hasCheese ? 'has-ch' : ''} ${plate.hasLettuce ? 'has-lt' : ''}">
                          ${plate.hasCheese ? '🧀' : ''}${plate.hasLettuce ? '🥗' : ''} ${!plate.hasCheese || !plate.hasLettuce ? '+ Pishloq/Salat' : '+ Yopish'}
                        </span>` :
                        plate.hasBottomBun ? '<span class="status-badge bun">🥩 + Kotlet</span>' :
                        '<span class="status-badge empty">+ Non</span>'}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Hot-dog Plates Row -->
            <div class="hotdog-plates-row">
              ${this.hotdogPlates.map(plate => `
                <div class="hotdog-plate-box ${plate.isComplete ? 'ready-to-serve' : ''}" data-hotdog="${plate.id}">
                  ${plate.isComplete ? `
                    <div class="hotdog-complete-anim">
                      ${ICONS.completeHotdog}
                      <div class="serve-tag">TAYYOR!</div>
                    </div>
                  ` : plate.hasBun ? `
                    <div class="assembling-hotdog">
                      ${ICONS.completeHotdog}
                      <div class="assemble-hint">+ Gorchitsa</div>
                    </div>
                  ` : `
                    <div class="empty-hotdog-tray">
                      <span>🌭 + Hot-dog</span>
                    </div>
                  `}
                </div>
              `).join('')}
            </div>

            <!-- Interactive Ingredient Counters / Trays -->
            <div class="ingredient-trays-container">
              <div class="ing-station-card" id="btn-add-bun">
                <div class="ing-mini-icon">🍞</div>
                <div class="ing-info">
                  <span class="ing-title">Non qo'yish</span>
                </div>
              </div>

              <div class="ing-station-card highlight-cheese" id="btn-add-cheese">
                <div class="ing-mini-icon">🧀</div>
                <div class="ing-info">
                  <span class="ing-title">Pishloq</span>
                  <span class="ing-sub">+10$ Bonus</span>
                </div>
              </div>

              <div class="ing-station-card highlight-lettuce" id="btn-add-lettuce">
                <div class="ing-mini-icon">🥗</div>
                <div class="ing-info">
                  <span class="ing-title">Salat bargi</span>
                  <span class="ing-sub">+10$ Bonus</span>
                </div>
              </div>

              <div class="ing-station-card" id="btn-add-topbun">
                <div class="ing-mini-icon">🍔</div>
                <div class="ing-info">
                  <span class="ing-title">Qopqoq</span>
                  <span class="ing-sub">Yopish</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT SECTION: Sizzling Meat Grill & Raw Patty Stash (Matching Image 1 & 2) -->
        <div class="station-side station-right">
          <div class="grill-station-card">
            <div class="station-title">
              <span>Grill (Kotletlar)</span>
              <span class="grill-badge">🔥 Olov</span>
            </div>

            <!-- Grill Surface with Heating Grates -->
            <div class="grill-surface-grid cols-${Math.min(3, this.grillSlots.length)}">
              ${this.grillSlots.map(slot => `
                <div class="grill-slot ${slot.state}" data-slot="${slot.id}">
                  <div class="grill-grate-lines"></div>
                  <div class="grill-meter-bar">
                    <div class="grill-meter" data-slot="${slot.id}"></div>
                  </div>

                  <div class="grill-slot-content">
                    ${slot.state === 'cooking' ? `
                      <div class="sizzling-patty">
                        ${ICONS.rawPatty}
                        <div class="smoke-puff">💨</div>
                      </div>
                    ` : slot.state === 'cooked' ? `
                      <div class="cooked-patty-glow">
                        ${ICONS.cookedPatty}
                        <div class="ready-badge">TAYYOR!</div>
                      </div>
                    ` : slot.state === 'burnt' ? `
                      <div class="burnt-patty-box">
                        ${ICONS.burntPatty}
                        <div class="burnt-badge">KUYDI! (Axlat)</div>
                      </div>
                    ` : `
                      <div class="empty-grill-mark">+ Go'sht</div>
                    `}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Raw Patties Stash Stack -->
            <div class="raw-patty-stash" id="btn-raw-patty">
              <div class="stash-header">🥩 Xom Kotletlar (Bosing)</div>
              <div class="patty-stack-visual">
                ${ICONS.rawPatty}
              </div>
            </div>
          </div>
        </div>

      </div>
    `;

    this.attachEventListeners();
  }

  private attachEventListeners() {
    // Raw patty click
    this.container.querySelector('#btn-raw-patty')?.addEventListener('click', () => {
      this.addPattyToGrill();
    });

    // Quick prep
    this.container.querySelector('#btn-quick-prep')?.addEventListener('click', () => {
      this.autoAssembleBurger();
    });

    // Grill slot clicks
    this.container.querySelectorAll('.grill-slot').forEach(el => {
      el.addEventListener('click', () => {
        const id = parseInt(el.getAttribute('data-slot') || '0', 10);
        this.handleGrillSlotClick(id);
      });
    });

    // Burger plate clicks
    this.container.querySelectorAll('.burger-plate-box').forEach(el => {
      el.addEventListener('click', () => {
        const id = parseInt(el.getAttribute('data-plate') || '0', 10);
        this.handleBurgerPlateClick(id);
      });
    });

    // Hotdog plate clicks
    this.container.querySelectorAll('.hotdog-plate-box').forEach(el => {
      el.addEventListener('click', () => {
        const id = parseInt(el.getAttribute('data-hotdog') || '0', 10);
        this.handleHotdogPlateClick(id);
      });
    });

    // Ingredient bar buttons
    this.container.querySelector('#btn-add-bun')?.addEventListener('click', () => {
      this.addToppingToPlate('bun');
    });
    this.container.querySelector('#btn-add-cheese')?.addEventListener('click', () => {
      this.addToppingToPlate('cheese');
    });
    this.container.querySelector('#btn-add-lettuce')?.addEventListener('click', () => {
      this.addToppingToPlate('lettuce');
    });
    this.container.querySelector('#btn-add-topbun')?.addEventListener('click', () => {
      this.addToppingToPlate('topBun');
    });

    // Fryer clicks
    this.container.querySelector('#btn-fryer')?.addEventListener('click', () => {
      this.handleFryerClick();
    });

    // Ready fries portions
    this.container.querySelectorAll('.ready-fries-item').forEach(el => {
      el.addEventListener('click', () => {
        this.serveFries();
      });
    });

    // Drink machine
    this.container.querySelector('#btn-drink')?.addEventListener('click', () => {
      this.handleDrinkClick();
    });
  }
}
