import { storage } from '../storage';
import { sounds } from '../audio';
import type { KitchenUpgrade } from '../types';

export class UpgradeManager {
  private container: HTMLElement;
  private onUpgradePurchased: () => void;

  constructor(container: HTMLElement, onUpgradePurchased: () => void) {
    this.container = container;
    this.onUpgradePurchased = onUpgradePurchased;
  }

  render() {
    const stats = storage.getStats();
    const upgrades = storage.getUpgrades();

    this.container.innerHTML = `
      <div class="upgrade-modal-overlay">
        <div class="upgrade-modal-content">
          <!-- Header -->
          <div class="upgrade-header">
            <div class="upgrade-title-badge">
              <span class="icon">✨</span>
              <h2>OSHXONANI YANGILASH (UPGRADE YOUR KITCHEN)</h2>
            </div>
            <div class="upgrade-stats-pill">
              <span class="coin-pill">🪙 ${stats.coins}</span>
              <span class="gem-pill">💎 ${stats.gems}</span>
            </div>
          </div>

          <!-- Before / After Visual Showcase (Matching Image 4) -->
          <div class="kitchen-comparison-banner">
            <div class="kitchen-before ${stats.kitchenTheme === 'standard' ? 'active' : ''}">
              <div class="badge-tag">Oddiy Oshxona</div>
              <div class="preview-kitchen old-theme">
                <div class="cracked-wall"></div>
                <div class="old-counter">🏚️ Standart jihozlar</div>
              </div>
            </div>

            <div class="upgrade-arrow">➡️</div>

            <div class="kitchen-after ${stats.kitchenTheme === 'deluxe' ? 'active' : ''}">
              <div class="badge-tag deluxe">Lyuks Oshxona ✨</div>
              <div class="preview-kitchen new-theme">
                <div class="sparkle-anim">✨</div>
                <div class="modern-counter">🌟 Yuqori tezlik & Daromad</div>
              </div>
            </div>
          </div>

          <!-- Upgrades Grid -->
          <div class="upgrades-grid">
            ${upgrades.map(u => this.renderUpgradeCard(u, stats.coins, stats.gems)).join('')}
          </div>

          <!-- Footer Back Button -->
          <div class="upgrade-footer">
            <button class="modal-close-btn" id="btn-close-upgrade">Oshxonaga Qaytish 👨‍🍳</button>
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  private renderUpgradeCard(u: KitchenUpgrade, userCoins: number, userGems: number) {
    const isMax = u.level >= u.maxLevel;
    const canAfford = userCoins >= u.cost && userGems >= u.gemCost;

    return `
      <div class="upgrade-card ${isMax ? 'maxed' : ''}">
        <div class="card-icon-box">${u.icon}</div>
        <div class="card-info">
          <div class="card-title-row">
            <span class="card-name">${u.name}</span>
            <span class="level-indicator">Lvl ${u.level}/${u.maxLevel}</span>
          </div>
          <div class="card-desc">${u.description}</div>
          <div class="card-effect">⚡ ${u.effectText}</div>
        </div>

        <div class="card-action">
          ${isMax ? `
            <div class="max-badge">MAX DARAXA</div>
          ` : `
            <button class="buy-upgrade-btn ${canAfford ? 'affordable' : 'disabled'}" data-upgrade="${u.id}">
              <span class="btn-cost">🪙 ${u.cost}</span>
              ${u.gemCost > 0 ? `<span class="btn-gem">💎 ${u.gemCost}</span>` : ''}
              <span class="btn-label">Sotib olish</span>
            </button>
          `}
        </div>
      </div>
    `;
  }

  private attachEvents() {
    this.container.querySelectorAll('.buy-upgrade-btn.affordable').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-upgrade');
        if (id) {
          const success = storage.purchaseUpgrade(id);
          if (success) {
            sounds.playCoin();
            this.render();
            this.onUpgradePurchased();
          }
        }
      });
    });

    this.container.querySelector('#btn-close-upgrade')?.addEventListener('click', () => {
      sounds.playClick();
      this.container.innerHTML = '';
    });
  }
}
