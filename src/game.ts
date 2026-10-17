import confetti from 'canvas-confetti';
import { CustomerManager } from './components/CustomerManager';
import { KitchenManager } from './components/KitchenManager';
import type { LevelConfig } from './types';
import { sounds } from './audio';
import { storage } from './storage';

export const LEVELS: LevelConfig[] = [
  {
    levelNumber: 1,
    targetScore: 140,
    durationSeconds: 100,
    customerSpawnInterval: 6.0,
    allowedDishes: ['burger', 'drink'],
    starScores: [100, 140, 190]
  },
  {
    levelNumber: 2,
    targetScore: 220,
    durationSeconds: 110,
    customerSpawnInterval: 5.5,
    allowedDishes: ['burger', 'fries', 'drink'],
    starScores: [160, 220, 300]
  },
  {
    levelNumber: 3,
    targetScore: 320,
    durationSeconds: 120,
    customerSpawnInterval: 5.0,
    allowedDishes: ['burger', 'hotdog', 'fries', 'drink'],
    starScores: [230, 320, 420]
  },
  {
    levelNumber: 4,
    targetScore: 430,
    durationSeconds: 130,
    customerSpawnInterval: 4.6,
    allowedDishes: ['burger', 'hotdog', 'fries', 'drink'],
    starScores: [310, 430, 560]
  },
  {
    levelNumber: 5,
    targetScore: 550,
    durationSeconds: 135,
    customerSpawnInterval: 4.2,
    allowedDishes: ['burger', 'hotdog', 'fries', 'drink'],
    starScores: [410, 550, 700]
  },
  {
    levelNumber: 6,
    targetScore: 680,
    durationSeconds: 140,
    customerSpawnInterval: 3.8,
    allowedDishes: ['burger', 'hotdog', 'fries', 'drink'],
    starScores: [510, 680, 850]
  },
  {
    levelNumber: 7,
    targetScore: 820,
    durationSeconds: 145,
    customerSpawnInterval: 3.5,
    allowedDishes: ['burger', 'hotdog', 'fries', 'drink'],
    starScores: [630, 820, 1020]
  },
  {
    levelNumber: 8,
    targetScore: 960,
    durationSeconds: 150,
    customerSpawnInterval: 3.2,
    allowedDishes: ['burger', 'hotdog', 'fries', 'drink'],
    starScores: [750, 960, 1180]
  },
  {
    levelNumber: 9,
    targetScore: 1120,
    durationSeconds: 155,
    customerSpawnInterval: 3.0,
    allowedDishes: ['burger', 'hotdog', 'fries', 'drink'],
    starScores: [890, 1120, 1380]
  },
  {
    levelNumber: 10,
    targetScore: 1320,
    durationSeconds: 160,
    customerSpawnInterval: 2.7,
    allowedDishes: ['burger', 'hotdog', 'fries', 'drink'],
    starScores: [1050, 1320, 1650]
  }
];

export class Game {
  private customerManager!: CustomerManager;
  private kitchenManager!: KitchenManager;

  private isRunning: boolean = false;
  private isPaused: boolean = false;
  private lastTime: number = 0;

  private currentLevelIndex: number = 0;
  private currentScore: number = 0;
  private timeRemaining: number = 60;
  private customersServedCount: number = 0;
  private customersLostCount: number = 0;

  // Combo system
  private comboCount: number = 0;
  private lastServeTime: number = 0;

  // DOM elements
  private headerEl: HTMLElement;
  private customerAreaEl: HTMLElement;
  private kitchenAreaEl: HTMLElement;
  private modalAreaEl: HTMLElement;

  constructor(elements: {
    header: HTMLElement;
    customerArea: HTMLElement;
    kitchenArea: HTMLElement;
    modalArea: HTMLElement;
  }) {
    this.headerEl = elements.header;
    this.customerAreaEl = elements.customerArea;
    this.kitchenAreaEl = elements.kitchenArea;
    this.modalAreaEl = elements.modalArea;

    this.initManagers();
  }

  private initManagers() {
    this.customerManager = new CustomerManager(this.customerAreaEl, {
      onCustomerServed: (reward, fast) => this.handleCustomerServed(reward, fast),
      onCustomerLost: () => this.handleCustomerLost()
    });

    this.kitchenManager = new KitchenManager(this.kitchenAreaEl, this.customerManager);
  }

  startLevel(levelNumber: number) {
    this.currentLevelIndex = Math.max(0, Math.min(LEVELS.length - 1, levelNumber - 1));
    const config = LEVELS[this.currentLevelIndex];

    this.currentScore = 0;
    this.timeRemaining = config.durationSeconds;
    this.customersServedCount = 0;
    this.customersLostCount = 0;
    this.comboCount = 0;
    this.lastServeTime = 0;

    this.customerManager.setAllowedDishes(config.allowedDishes);
    this.customerManager.setSpawnInterval(config.customerSpawnInterval);
    this.customerManager.setLevel(config.levelNumber);
    this.customerManager.reset();
    this.kitchenManager.initStations();

    this.isRunning = true;
    this.isPaused = false;
    this.lastTime = performance.now();

    this.renderHeader();
    requestAnimationFrame((t) => this.loop(t));
  }

  private loop(currentTime: number) {
    if (!this.isRunning) return;

    if (this.isPaused) {
      this.lastTime = currentTime;
      requestAnimationFrame((t) => this.loop(t));
      return;
    }

    const deltaTime = Math.min(0.1, (currentTime - this.lastTime) / 1000);
    this.lastTime = currentTime;

    // Countdown timer
    this.timeRemaining -= deltaTime;
    if (this.timeRemaining <= 0) {
      this.timeRemaining = 0;
      this.endLevel();
      return;
    }

    // Reset combo if too much time passed
    if (currentTime - this.lastServeTime > 4500 && this.comboCount > 0) {
      this.comboCount = 0;
      this.renderHeader();
    }

    // Update subsystems
    this.customerManager.update(deltaTime);
    this.kitchenManager.update(deltaTime);

    this.updateHeaderTime();

    requestAnimationFrame((t) => this.loop(t));
  }

  private handleCustomerServed(reward: number, _isFast: boolean) {
    this.customersServedCount++;
    const now = performance.now();

    if (now - this.lastServeTime < 4500) {
      this.comboCount++;
    } else {
      this.comboCount = 1;
    }
    this.lastServeTime = now;

    let comboBonus = 0;
    if (this.comboCount > 1) {
      comboBonus = this.comboCount * 5;
      this.showComboFloat(this.comboCount, comboBonus);
    }

    this.currentScore += reward + comboBonus;
    this.renderHeader();

    // Check target score instant fireworks
    const config = LEVELS[this.currentLevelIndex];
    if (this.currentScore >= config.targetScore && this.currentScore - (reward + comboBonus) < config.targetScore) {
      sounds.playWin();
    }
  }

  private handleCustomerLost() {
    this.customersLostCount++;
    this.comboCount = 0;
    this.renderHeader();
  }

  private showComboFloat(combo: number, bonus: number) {
    const el = document.createElement('div');
    el.className = 'combo-floating-badge';
    el.innerHTML = `🔥 COMBO x${combo}! +$${bonus}`;
    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1500);
  }

  private endLevel() {
    this.isRunning = false;
    const config = LEVELS[this.currentLevelIndex];

    // Calculate stars
    let stars = 0;
    if (this.currentScore >= config.starScores[2]) stars = 3;
    else if (this.currentScore >= config.starScores[1]) stars = 2;
    else if (this.currentScore >= config.starScores[0]) stars = 1;

    const isWin = stars >= 1;

    if (isWin) {
      sounds.playWin();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      storage.completeLevel(config.levelNumber, stars, this.currentScore);
    } else {
      sounds.playTrash();
    }

    this.showLevelResultModal(isWin, stars);
  }

  private showLevelResultModal(isWin: boolean, stars: number) {
    const config = LEVELS[this.currentLevelIndex];

    this.modalAreaEl.innerHTML = `
      <div class="result-modal-overlay">
        <div class="result-modal-card ${isWin ? 'win' : 'lose'}">
          <div class="result-icon">${isWin ? '🏆' : '😢'}</div>
          <h2 class="result-title">${isWin ? 'DARAJA YAKUNLANDI!' : 'VAQT TUGADI!'}</h2>
          <p class="result-subtitle">
            ${isWin ? `${config.levelNumber}-Daraja a\'lo darajada yakunlandi!` : 'Mijozlar buyurtmasini tezroq yetkazing!'}
          </p>

          <!-- Stars display -->
          <div class="stars-row">
            <span class="star-item ${stars >= 1 ? 'earned' : 'empty'}">⭐</span>
            <span class="star-item ${stars >= 2 ? 'earned' : 'empty'}">⭐</span>
            <span class="star-item ${stars >= 3 ? 'earned' : 'empty'}">⭐</span>
          </div>

          <!-- Score Breakdown -->
          <div class="result-stats-table">
            <div class="stat-row">
              <span>To'plangan mablag':</span>
              <span class="val-gold">🪙 $${this.currentScore}</span>
            </div>
            <div class="stat-row">
              <span>Maqsadli mablag':</span>
              <span>$${config.targetScore}</span>
            </div>
            <div class="stat-row">
              <span>Xizmat ko'rsatilgan mijozlar:</span>
              <span>👥 ${this.customersServedCount} ta</span>
            </div>
            <div class="stat-row">
              <span>Ketib qolganlar:</span>
              <span>🚪 ${this.customersLostCount} ta</span>
            </div>
          </div>

          <!-- Buttons -->
          <div class="result-actions-row">
            <button class="action-btn replay" id="btn-replay">Qayta O'ynash 🔄</button>
            <button class="action-btn upgrades" id="btn-open-upgrade">Oshxona Yangilash ✨</button>
            ${isWin && this.currentLevelIndex < LEVELS.length - 1 ? `
              <button class="action-btn next" id="btn-next">Keyingi Daraja ⏩</button>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    this.modalAreaEl.querySelector('#btn-replay')?.addEventListener('click', () => {
      this.modalAreaEl.innerHTML = '';
      this.startLevel(config.levelNumber);
    });

    this.modalAreaEl.querySelector('#btn-next')?.addEventListener('click', () => {
      this.modalAreaEl.innerHTML = '';
      this.startLevel(config.levelNumber + 1);
    });

    this.modalAreaEl.querySelector('#btn-open-upgrade')?.addEventListener('click', () => {
      this.modalAreaEl.innerHTML = '';
      // Trigger upgrade modal
      const upEvt = new CustomEvent('open-upgrades');
      window.dispatchEvent(upEvt);
    });
  }

  private updateHeaderTime() {
    const timeEl = this.headerEl.querySelector('.timer-value');
    if (timeEl) {
      const mins = Math.floor(this.timeRemaining / 60);
      const secs = Math.floor(this.timeRemaining % 60);
      timeEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }

  renderHeader() {
    const config = LEVELS[this.currentLevelIndex];
    const stats = storage.getStats();

    const mins = Math.floor(this.timeRemaining / 60);
    const secs = Math.floor(this.timeRemaining % 60);
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const scorePct = Math.min(100, (this.currentScore / config.targetScore) * 100);

    this.headerEl.innerHTML = `
      <div class="game-top-bar">
        <!-- Level & Target Info -->
        <div class="bar-section level-info">
          <div class="level-badge">${config.levelNumber}-DARAJA</div>
          <div class="score-progress-box">
            <div class="score-labels">
              <span class="current-score">🪙 $${this.currentScore}</span>
              <span class="target-score">/ $${config.targetScore}</span>
            </div>
            <div class="score-track">
              <div class="score-bar" style="width: ${scorePct}%"></div>
              <!-- 3 Star Markers -->
              <div class="star-marker m1" style="left: ${(config.starScores[0] / config.targetScore) * 100}%">⭐</div>
              <div class="star-marker m2" style="left: ${(config.starScores[1] / config.targetScore) * 100}%">⭐</div>
              <div class="star-marker m3" style="left: ${(config.starScores[2] / config.targetScore) * 100}%">⭐</div>
            </div>
          </div>
        </div>

        <!-- Center: Level Countdown Timer -->
        <div class="bar-section timer-section">
          <div class="timer-box">
            <span class="timer-icon">⏳</span>
            <span class="timer-value">${timeStr}</span>
          </div>
          ${this.comboCount > 1 ? `
            <div class="combo-pill">COMBO x${this.comboCount}!</div>
          ` : ''}
        </div>

        <!-- Right: Coins, Gems, Navigation Buttons -->
        <div class="bar-section nav-section">
          <div class="currency-pill coins">
            <span>🪙</span>
            <span id="player-coins-val">${stats.coins}</span>
          </div>
          <div class="currency-pill gems">
            <span>💎</span>
            <span id="player-gems-val">${stats.gems}</span>
          </div>

          <button class="nav-icon-btn" id="btn-toggle-sound" title="Ovoz yoqish/o'chirish">
            ${sounds.enabled ? '🔊' : '🔇'}
          </button>
          <button class="nav-icon-btn highlight" id="btn-nav-upgrades" title="Oshxonani Yangilash (4-rasm)">
            ✨ Yangilash
          </button>
          <button class="nav-icon-btn highlight book" id="btn-nav-cookbook" title="Retseptlar Albomi (5-rasm)">
            📖 Albom
          </button>
        </div>
      </div>
    `;

    this.headerEl.querySelector('#btn-toggle-sound')?.addEventListener('click', () => {
      sounds.enabled = !sounds.enabled;
      sounds.playClick();
      this.renderHeader();
    });

    this.headerEl.querySelector('#btn-nav-upgrades')?.addEventListener('click', () => {
      sounds.playClick();
      window.dispatchEvent(new CustomEvent('open-upgrades'));
    });

    this.headerEl.querySelector('#btn-nav-cookbook')?.addEventListener('click', () => {
      sounds.playClick();
      window.dispatchEvent(new CustomEvent('open-cookbook'));
    });
  }

  refreshTheme() {
    this.kitchenManager.initStations();
    this.renderHeader();
  }
}
