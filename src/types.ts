export type DishType = 'burger' | 'hotdog' | 'fries' | 'drink' | 'pizza' | 'nachos';

export type PattyState = 'raw' | 'cooking' | 'cooked' | 'burnt';
export type FryState = 'empty' | 'frying' | 'cooked';
export type DrinkState = 'empty' | 'filling' | 'ready';
export type SausageState = 'raw' | 'cooking' | 'cooked' | 'burnt';

export interface GrillSlot {
  id: number;
  state: PattyState;
  progress: number; // 0 to 1
  burnProgress: number; // 0 to 1
  cookingDuration: number;
  burnDuration: number;
}

export interface BurgerPlate {
  id: number;
  hasBottomBun: boolean;
  hasPatty: boolean;
  hasCheese: boolean;
  hasLettuce: boolean;
  hasTopBun: boolean;
  isComplete: boolean;
}

export interface HotdogPlate {
  id: number;
  hasBun: boolean;
  hasSausage: boolean;
  hasMustard: boolean;
  isComplete: boolean;
}

export interface FryerSlot {
  id: number;
  state: FryState;
  progress: number;
  readyPortions: number;
  maxPortions: number;
}

export interface DrinkDispenser {
  id: number;
  state: DrinkState;
  progress: number;
  hasReadyCup: boolean;
}

export type CustomerMood = 'happy' | 'neutral' | 'impatient' | 'angry' | 'ecstatic';

export interface OrderItem {
  id: string;
  type: DishType;
  details?: {
    withCheese?: boolean;
    withLettuce?: boolean;
    withMustard?: boolean;
  };
  price: number;
  isDelivered?: boolean;
}

export interface Customer {
  id: string;
  name: string;
  avatarId: number; // 0: headband girl, 1: red hair girl, 2: grandpa, 3: cool guy
  slotIndex: number;
  orders: OrderItem[];
  maxPatience: number; // in seconds
  currentPatience: number;
  mood: CustomerMood;
  tipMultiplier: number;
}

export interface KitchenUpgrade {
  id: string;
  name: string;
  category: 'appliances' | 'ingredients' | 'interior';
  level: number;
  maxLevel: number;
  cost: number;
  gemCost: number;
  description: string;
  icon: string;
  effectText: string;
}

export interface GameStats {
  coins: number;
  gems: number;
  currentLevel: number;
  highestLevelUnlocked: number;
  levelStars: Record<number, number>;
  unlockedRecipes: string[];
  kitchenTheme: 'standard' | 'modern' | 'deluxe';
}

export interface LevelConfig {
  levelNumber: number;
  targetScore: number;
  durationSeconds: number;
  customerSpawnInterval: number;
  allowedDishes: DishType[];
  starScores: [number, number, number];
}
