import './style.css';
import { Game, LEVELS } from './game';
import { UpgradeManager } from './components/UpgradeManager';
import { CookbookManager } from './components/CookbookManager';
import { storage } from './storage';
import { sounds } from './audio';
import { RESTAURANT_BG_SVG } from './assets';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="game-container" id="game-root">
    <!-- Top Header Bar -->
    <header id="game-header"></header>

    <!-- Counter Area: Restaurant Dining Hall Scenery + Customers Queue -->
    <div id="customer-area" class="restaurant-hall-bg">
      <div id="restaurant-scenery" class="restaurant-scenery-layer"></div>
      <div id="customer-slots-container"></div>
    </div>

    <!-- Kitchen Counter Area: Grill, Assembly Table, Fryer, Drinks -->
    <div id="kitchen-area" class="kitchen-counter-bg"></div>

    <!-- Modals & Overlays Container -->
    <div id="modal-area"></div>
  </div>
`;

const headerEl = document.querySelector<HTMLElement>('#game-header')!;
const customerSlotsEl = document.querySelector<HTMLElement>('#customer-slots-container')!;
const kitchenAreaEl = document.querySelector<HTMLElement>('#kitchen-area')!;
const modalAreaEl = document.querySelector<HTMLElement>('#modal-area')!;
const sceneryEl = document.querySelector<HTMLElement>('#restaurant-scenery')!;

// Render rich restaurant background (tables, chairs, sunlit windows, lamps, decor)
sceneryEl.innerHTML = RESTAURANT_BG_SVG;

const game = new Game({
  header: headerEl,
  customerArea: customerSlotsEl,
  kitchenArea: kitchenAreaEl,
  modalArea: modalAreaEl
});

const upgradeManager = new UpgradeManager(modalAreaEl, () => {
  game.refreshTheme();
});

const cookbookManager = new CookbookManager(modalAreaEl);

// Global custom events
window.addEventListener('open-upgrades', () => {
  upgradeManager.render();
});

window.addEventListener('open-cookbook', () => {
  cookbookManager.render();
});

// Show initial Welcome / Level Select screen
function showWelcomeScreen() {
  const stats = storage.getStats();

  modalAreaEl.innerHTML = `
    <div class="welcome-modal-overlay">
      <div class="welcome-card">
        <div class="welcome-banner">
          <div class="chef-hat-badge">👨‍🍳</div>
          <h1>CHEF FEVER: OSHXONA JANNATI</h1>
          <p class="tagline">Xush kelibsiz! Mijozlarga mazali taomlar tayyorlang va oshxonangizni yulduz darajasiga olib chiqing!</p>
        </div>

        <!-- Level Selector Grid -->
        <div class="level-select-grid">
          ${LEVELS.map(lvl => {
            const isUnlocked = lvl.levelNumber <= stats.highestLevelUnlocked;
            const stars = stats.levelStars[lvl.levelNumber] || 0;

            return `
              <div class="level-select-card ${isUnlocked ? 'unlocked' : 'locked'}" data-lvl="${lvl.levelNumber}">
                <div class="level-num">${lvl.levelNumber}</div>
                <div class="level-stars-mini">
                  ${isUnlocked ? `
                    <span>${stars >= 1 ? '⭐' : '☆'}</span>
                    <span>${stars >= 2 ? '⭐' : '☆'}</span>
                    <span>${stars >= 3 ? '⭐' : '☆'}</span>
                  ` : '🔒'}
                </div>
                <div class="level-goal">$${lvl.targetScore}</div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Action buttons -->
        <div class="welcome-actions">
          <button class="primary-play-btn" id="btn-start-game">
            🎮 1-DARAJANI BOSHLASH
          </button>
          <div class="welcome-sub-actions">
            <button class="secondary-btn" id="btn-open-shop">✨ Oshxona Yangilash (4-rasm)</button>
            <button class="secondary-btn" id="btn-open-book">📖 Retseptlar Albomi (5-rasm)</button>
          </div>
        </div>
      </div>
    </div>
  `;

  modalAreaEl.querySelectorAll('.level-select-card.unlocked').forEach(el => {
    el.addEventListener('click', () => {
      const lvl = parseInt(el.getAttribute('data-lvl') || '1', 10);
      sounds.playClick();
      modalAreaEl.innerHTML = '';
      game.startLevel(lvl);
    });
  });

  modalAreaEl.querySelector('#btn-start-game')?.addEventListener('click', () => {
    sounds.playServe();
    modalAreaEl.innerHTML = '';
    game.startLevel(1);
  });

  modalAreaEl.querySelector('#btn-open-shop')?.addEventListener('click', () => {
    sounds.playClick();
    upgradeManager.render();
  });

  modalAreaEl.querySelector('#btn-open-book')?.addEventListener('click', () => {
    sounds.playClick();
    cookbookManager.render();
  });
}

// Start screen
showWelcomeScreen();
