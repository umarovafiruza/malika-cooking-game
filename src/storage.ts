import type { GameStats, KitchenUpgrade } from './types';

const STORAGE_KEY = 'cooking_paradise_save_v1';

export const DEFAULT_UPGRADES: KitchenUpgrade[] = [
  {
    id: 'grill_slots',
    name: 'Qo\'shimcha Grill Joyi',
    category: 'appliances',
    level: 1,
    maxLevel: 3,
    cost: 100,
    gemCost: 0,
    description: 'Bir vaqtning o\'zida ko\'proq kotlet qovuring (2 -> 4 -> 6)',
    icon: '🔥',
    effectText: '+2 ta kotlet joyi'
  },
  {
    id: 'fryer_slots',
    name: 'Tezkor Fri Savati',
    category: 'appliances',
    level: 1,
    maxLevel: 3,
    cost: 150,
    gemCost: 1,
    description: 'Fri kartoshkasini tezroq qovurish va ko\'proq porsiya saqlash',
    icon: '🍟',
    effectText: '+1 ta qo\'shimcha fri porsiyasi'
  },
  {
    id: 'drink_machine',
    name: 'Avtomat Kola Krani',
    category: 'appliances',
    level: 1,
    maxLevel: 2,
    cost: 120,
    gemCost: 0,
    description: 'Ichimliklar stakanini tezroq to\'ldiradi',
    icon: '🥤',
    effectText: '2 barobar tez quyish'
  },
  {
    id: 'meat_quality',
    name: 'Premium Mol Go\'shti',
    category: 'ingredients',
    level: 1,
    maxLevel: 4,
    cost: 180,
    gemCost: 2,
    description: 'Kotletlar yanada mazali bo\'lib, har bir burger narxini oshiradi',
    icon: '🥩',
    effectText: 'Har bir burger uchun +$10 daromad'
  },
  {
    id: 'hotdog_sausage',
    name: 'Germaniya Sosiskalari',
    category: 'ingredients',
    level: 1,
    maxLevel: 3,
    cost: 140,
    gemCost: 1,
    description: 'Hot-doglar uchun sifatli go\'shtli sosiskalar',
    icon: '🌭',
    effectText: 'Hot-dog uchun +$8 qo\'shimcha narx'
  },
  {
    id: 'radio_jukebox',
    name: 'Musiqa Jukebox',
    category: 'interior',
    level: 1,
    maxLevel: 3,
    cost: 200,
    gemCost: 2,
    description: 'Kutayotgan mijozlarni xushnud qiladi va ularning sabrini oshiradi',
    icon: '📻',
    effectText: '+25% mijoz sabri'
  },
  {
    id: 'deluxe_kitchen',
    name: 'Zamonaviy Oshxona Dizayni',
    category: 'interior',
    level: 1,
    maxLevel: 2,
    cost: 500,
    gemCost: 5,
    description: 'Oshxonani 4-rasmdagi yangi yaltiroq zamonaviy holatga o\'zgartiradi',
    icon: '✨',
    effectText: 'Yangi yorqin restoran interyeri'
  }
];

export const INITIAL_STATS: GameStats = {
  coins: 250,
  gems: 5,
  currentLevel: 1,
  highestLevelUnlocked: 1,
  levelStars: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
  unlockedRecipes: ['burger', 'hotdog', 'fries', 'drink'],
  kitchenTheme: 'standard'
};

export class StorageManager {
  private stats: GameStats;
  private upgrades: KitchenUpgrade[];

  constructor() {
    this.stats = this.loadStats();
    this.upgrades = this.loadUpgrades();
  }

  private loadStats(): GameStats {
    try {
      const data = localStorage.getItem(STORAGE_KEY + '_stats');
      if (data) {
        return { ...INITIAL_STATS, ...JSON.parse(data) };
      }
    } catch {
      // fallback
    }
    return { ...INITIAL_STATS };
  }

  private loadUpgrades(): KitchenUpgrade[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY + '_upgrades');
      if (data) {
        const saved = JSON.parse(data) as KitchenUpgrade[];
        return DEFAULT_UPGRADES.map(def => {
          const found = saved.find(s => s.id === def.id);
          return found ? { ...def, level: found.level, cost: found.cost } : def;
        });
      }
    } catch {
      // fallback
    }
    return [...DEFAULT_UPGRADES];
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY + '_stats', JSON.stringify(this.stats));
      localStorage.setItem(STORAGE_KEY + '_upgrades', JSON.stringify(this.upgrades));
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  getStats(): GameStats {
    return this.stats;
  }

  getUpgrades(): KitchenUpgrade[] {
    return this.upgrades;
  }

  getUpgrade(id: string): KitchenUpgrade | undefined {
    return this.upgrades.find(u => u.id === id);
  }

  addCoins(amount: number) {
    this.stats.coins += amount;
    this.save();
  }

  addGems(amount: number) {
    this.stats.gems += amount;
    this.save();
  }

  purchaseUpgrade(id: string): boolean {
    const upgrade = this.upgrades.find(u => u.id === id);
    if (!upgrade) return false;
    if (upgrade.level >= upgrade.maxLevel) return false;

    if (this.stats.coins >= upgrade.cost && this.stats.gems >= upgrade.gemCost) {
      this.stats.coins -= upgrade.cost;
      this.stats.gems -= upgrade.gemCost;
      upgrade.level += 1;
      upgrade.cost = Math.round(upgrade.cost * 1.6);
      upgrade.gemCost = Math.round(upgrade.gemCost * 1.5);

      if (id === 'deluxe_kitchen' && upgrade.level >= 2) {
        this.stats.kitchenTheme = 'deluxe';
      }

      this.save();
      return true;
    }
    return false;
  }

  completeLevel(level: number, stars: number, score: number) {
    const currentStars = this.stats.levelStars[level] || 0;
    if (stars > currentStars) {
      this.stats.levelStars[level] = stars;
    }
    if (level === this.stats.highestLevelUnlocked && stars > 0) {
      this.stats.highestLevelUnlocked = Math.min(10, level + 1);
    }
    // Give level completion rewards
    this.addCoins(score);
    this.addGems(stars); // 1 gem per new star earned
    this.save();
  }

  resetAll() {
    this.stats = { ...INITIAL_STATS };
    this.upgrades = [...DEFAULT_UPGRADES];
    this.save();
  }
}

export const storage = new StorageManager();
