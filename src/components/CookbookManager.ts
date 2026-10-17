import { ICONS } from '../assets';
import { sounds } from '../audio';
import { storage } from '../storage';

export class CookbookManager {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render() {
    const stats = storage.getStats();

    const dishes = [
      {
        id: 'burger',
        title: 'Klassik Chizburger',
        desc: 'Yumshoq kunchutli non, suvli mol go\'shti kotleti, erigan pishloq va yangi barra salat bargi.',
        icon: ICONS.completeBurger,
        stars: 3,
        sticker: '🍔 Zo\'r!',
        price: '+$35'
      },
      {
        id: 'hotdog',
        title: 'Qarsildoq Hot-dog',
        desc: 'Maxsus nonga qovurilgan go\'shtli sosiska, barra salat va achchiq gorchitsa sousi bilan.',
        icon: ICONS.completeHotdog,
        stars: 3,
        sticker: '🌭 Yangi!',
        price: '+$28'
      },
      {
        id: 'fries',
        title: 'Oltinrang Fri Kartoshkasi',
        desc: 'Yog\'da qizarguncha qovurilgan xushxo\'r fri kartoshkalari. Har bir mijozning sevimlisi.',
        icon: ICONS.frenchFries,
        stars: 3,
        sticker: '🍟 Qars-qurs',
        price: '+$15'
      },
      {
        id: 'drink',
        title: 'Muzdek Kola',
        desc: 'Muz bo\'lakchalari va naycha bilan to\'ldirilgan tetiklashtiruvchi gazli ichimlik.',
        icon: ICONS.coldDrink,
        stars: 3,
        sticker: '🥤 Muzdek',
        price: '+$12'
      },
      {
        id: 'pizza',
        title: 'Pepperoni Pitsa',
        desc: 'Yupqa xamir, boy pomidor sousi, cho\'ziluvchan motsarella pishlog\'i va achchiq sosiskalar.',
        icon: ICONS.pizza,
        stars: stats.highestLevelUnlocked >= 3 ? 3 : 1,
        sticker: stats.highestLevelUnlocked >= 3 ? '🍕 Italiya' : '🔒 3-Darajada',
        price: '+$45'
      },
      {
        id: 'nachos',
        title: 'Meksika Nachoslari',
        desc: 'Qarsildoq makkajo\'xori chipsi 3 xil sous bilan: Guakamole, Salsa va issiq Pishloq.',
        icon: ICONS.nachos,
        stars: stats.highestLevelUnlocked >= 4 ? 3 : 1,
        sticker: stats.highestLevelUnlocked >= 4 ? '🌮 Meksika' : '🔒 4-Darajada',
        price: '+$40'
      }
    ];

    this.container.innerHTML = `
      <div class="cookbook-modal-overlay">
        <div class="cookbook-book-wrapper">
          <!-- Scrapbook Header with Pin Notes -->
          <div class="book-header-banner">
            <div class="washi-tape tape-left"></div>
            <div class="washi-tape tape-right"></div>
            <h1 class="book-title">📖 OSHXONA JANNATI: RETSEPTLAR ALBOMI</h1>
            <p class="book-subtitle">FOOD PARADISE WITH MANY TASTY DISHES!</p>
          </div>

          <!-- Scrapbook Grid with Polaroid Photos (Matching Image 5) -->
          <div class="polaroid-grid">
            ${dishes.map(d => `
              <div class="polaroid-card">
                <div class="polaroid-pin">📌</div>
                <div class="polaroid-photo-frame">
                  <div class="dish-illustration">
                    ${d.icon}
                  </div>
                  <div class="photo-sticker">${d.sticker}</div>
                </div>

                <div class="polaroid-caption">
                  <div class="caption-title">${d.title}</div>
                  <div class="caption-stars">⭐⭐⭐</div>
                  <div class="caption-desc">${d.desc}</div>
                  <div class="caption-reward">Daromad: <span class="price-highlight">${d.price}</span></div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Close button -->
          <div class="cookbook-footer">
            <button class="modal-close-btn" id="btn-close-cookbook">Albomni Yopish 📖</button>
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  private attachEvents() {
    this.container.querySelector('#btn-close-cookbook')?.addEventListener('click', () => {
      sounds.playClick();
      this.container.innerHTML = '';
    });
  }
}
