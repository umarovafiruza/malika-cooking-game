import type { BurgerPlate, CustomerMood } from './types';

export const AVATARS = [
  // 0: Headband Girl (Dark curly hair, yellow/blue headband, blue shirt)
  (mood: CustomerMood = 'happy') => `
    <svg viewBox="0 0 120 140" class="avatar-svg">
      <defs>
        <radialGradient id="skin0" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#af6e4d"/>
          <stop offset="100%" stop-color="#8a4f32"/>
        </radialGradient>
      </defs>
      <!-- Hair back -->
      <circle cx="60" cy="55" r="46" fill="#2d1c15"/>
      <circle cx="30" cy="45" r="22" fill="#2d1c15"/>
      <circle cx="90" cy="45" r="22" fill="#2d1c15"/>
      <circle cx="25" cy="70" r="18" fill="#2d1c15"/>
      <circle cx="95" cy="70" r="18" fill="#2d1c15"/>
      <!-- Body / Shirt -->
      <path d="M 25 140 C 25 105, 95 105, 95 140 Z" fill="#58a4e0"/>
      <path d="M 40 110 L 60 125 L 80 110" stroke="#fff" stroke-width="2" fill="none"/>
      <!-- Neck -->
      <rect x="52" y="80" width="16" height="20" rx="4" fill="#8a4f32"/>
      <!-- Face -->
      <ellipse cx="60" cy="62" rx="30" ry="34" fill="url(#skin0)"/>
      <!-- Headband -->
      <path d="M 33 46 C 45 32, 75 32, 87 46" stroke="#f6c23e" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M 40 43 C 50 35, 70 35, 80 43" stroke="#2e59d9" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Eyes -->
      ${mood === 'angry' ? `
        <ellipse cx="49" cy="60" rx="4" ry="3" fill="#111"/>
        <ellipse cx="71" cy="60" rx="4" ry="3" fill="#111"/>
        <path d="M 43 54 L 54 58" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 77 54 L 66 58" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
      ` : mood === 'impatient' ? `
        <ellipse cx="49" cy="60" rx="4.5" ry="4" fill="#111"/>
        <ellipse cx="71" cy="60" rx="4.5" ry="4" fill="#111"/>
        <path d="M 43 56 L 54 56" stroke="#222" stroke-width="2"/>
        <path d="M 66 56 L 77 56" stroke="#222" stroke-width="2"/>
        <!-- Sweat drop -->
        <path d="M 85 48 C 85 45, 89 42, 89 42 C 89 42, 93 45, 93 48 C 93 51, 85 51, 85 48 Z" fill="#36b9cc"/>
      ` : `
        <ellipse cx="48" cy="60" rx="5" ry="6" fill="#111"/>
        <ellipse cx="72" cy="60" rx="5" ry="6" fill="#111"/>
        <circle cx="50" cy="58" r="2" fill="#fff"/>
        <circle cx="74" cy="58" r="2" fill="#fff"/>
        <!-- Eyelashes -->
        <path d="M 43 54 C 47 50, 53 50, 55 54" stroke="#222" stroke-width="2" fill="none"/>
        <path d="M 65 54 C 67 50, 73 50, 77 54" stroke="#222" stroke-width="2" fill="none"/>
      `}
      <!-- Nose -->
      <path d="M 58 66 C 60 69, 62 69, 64 66" stroke="#683921" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <!-- Mouth -->
      ${mood === 'angry' ? `
        <path d="M 52 82 Q 60 75 68 82" stroke="#4d1616" stroke-width="3" fill="none" stroke-linecap="round"/>
      ` : mood === 'impatient' ? `
        <line x1="52" y1="78" x2="68" y2="78" stroke="#4d1616" stroke-width="3" stroke-linecap="round"/>
      ` : `
        <path d="M 50 74 Q 60 86 70 74 Z" fill="#b92b27"/>
        <path d="M 54 75 Q 60 78 66 75" fill="#fff"/>
      `}
      <!-- Gold earring -->
      <circle cx="31" cy="68" r="4" stroke="#f6c23e" stroke-width="2" fill="none"/>
    </svg>
  `,

  // 1: Red Hair Glasses Girl (Bun hair, glasses, plaid shirt)
  (mood: CustomerMood = 'happy') => `
    <svg viewBox="0 0 120 140" class="avatar-svg">
      <defs>
        <radialGradient id="skin1" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#ffe3d1"/>
          <stop offset="100%" stop-color="#f8c9b2"/>
        </radialGradient>
      </defs>
      <!-- Bun on top -->
      <circle cx="60" cy="24" r="20" fill="#ba4825"/>
      <circle cx="60" cy="30" r="14" fill="#a03b1c"/>
      <!-- Body / Plaid Shirt -->
      <path d="M 25 140 C 25 105, 95 105, 95 140 Z" fill="#2d6a9f"/>
      <path d="M 40 108 L 40 140 M 80 108 L 80 140" stroke="#71b1db" stroke-width="3"/>
      <path d="M 25 125 L 95 125" stroke="#71b1db" stroke-width="3"/>
      <!-- Neck -->
      <rect x="52" y="80" width="16" height="20" rx="4" fill="#f8c9b2"/>
      <!-- Hair back -->
      <path d="M 28 50 C 25 80, 40 90, 40 90 L 80 90 C 80 90, 95 80, 92 50 Z" fill="#ba4825"/>
      <!-- Face -->
      <ellipse cx="60" cy="62" rx="28" ry="32" fill="url(#skin1)"/>
      <!-- Bangs -->
      <path d="M 32 50 Q 60 38 88 50 Q 60 45 32 50 Z" fill="#ba4825"/>
      <!-- Glasses Frame -->
      <rect x="36" y="52" width="20" height="17" rx="5" fill="none" stroke="#222" stroke-width="3"/>
      <rect x="64" y="52" width="20" height="17" rx="5" fill="none" stroke="#222" stroke-width="3"/>
      <line x1="56" y1="60" x2="64" y2="60" stroke="#222" stroke-width="3"/>
      <!-- Eyes behind glasses -->
      ${mood === 'angry' ? `
        <ellipse cx="46" cy="60" rx="3.5" ry="3" fill="#2e7d32"/>
        <ellipse cx="74" cy="60" rx="3.5" ry="3" fill="#2e7d32"/>
      ` : `
        <ellipse cx="46" cy="60" rx="4.5" ry="5" fill="#2e7d32"/>
        <ellipse cx="74" cy="60" rx="4.5" ry="5" fill="#2e7d32"/>
        <circle cx="48" cy="58" r="1.5" fill="#fff"/>
        <circle cx="76" cy="58" r="1.5" fill="#fff"/>
      `}
      <!-- Eyebrows -->
      ${mood === 'angry' ? `
        <path d="M 37 47 L 52 51" stroke="#8a3014" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 83 47 L 68 51" stroke="#8a3014" stroke-width="2.5" stroke-linecap="round"/>
      ` : `
        <path d="M 37 49 Q 46 45 54 48" stroke="#8a3014" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M 66 48 Q 74 45 83 49" stroke="#8a3014" stroke-width="2" fill="none" stroke-linecap="round"/>
      `}
      <!-- Mouth -->
      ${mood === 'angry' ? `
        <path d="M 52 81 Q 60 75 68 81" stroke="#900" stroke-width="3" fill="none" stroke-linecap="round"/>
      ` : mood === 'impatient' ? `
        <line x1="52" y1="78" x2="68" y2="78" stroke="#900" stroke-width="3" stroke-linecap="round"/>
        <!-- Sweat drop -->
        <path d="M 86 50 C 86 47, 90 44, 90 44 C 90 44, 94 47, 94 50 C 94 53, 86 53, 86 50 Z" fill="#36b9cc"/>
      ` : `
        <path d="M 51 75 Q 60 85 69 75 Z" fill="#e84a5f"/>
      `}
    </svg>
  `,

  // 2: Friendly Grandpa (White hair, glasses, moustache, orange sweater with diamond argyle)
  (mood: CustomerMood = 'happy') => `
    <svg viewBox="0 0 120 140" class="avatar-svg">
      <defs>
        <radialGradient id="skin2" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#fde2cf"/>
          <stop offset="100%" stop-color="#ebbe9e"/>
        </radialGradient>
      </defs>
      <!-- White Hair -->
      <ellipse cx="60" cy="48" rx="36" ry="32" fill="#eceff1"/>
      <circle cx="28" cy="62" r="10" fill="#cfd8dc"/>
      <circle cx="92" cy="62" r="10" fill="#cfd8dc"/>
      <!-- Body: Orange sweater with green tie/argyle -->
      <path d="M 20 140 C 20 100, 100 100, 100 140 Z" fill="#d97724"/>
      <!-- Green Collar & Tie -->
      <polygon points="53,98 67,98 60,118" fill="#2d6a4f"/>
      <polygon points="60,112 65,138 55,138" fill="#1b4332"/>
      <polygon points="45,120 60,105 75,120 60,135" stroke="#ecc37b" stroke-width="2" fill="none"/>
      <!-- Neck -->
      <rect x="52" y="80" width="16" height="20" rx="3" fill="#ebbe9e"/>
      <!-- Face -->
      <ellipse cx="60" cy="64" rx="30" ry="32" fill="url(#skin2)"/>
      <!-- Grandpa Glasses -->
      <circle cx="47" cy="59" r="11" fill="none" stroke="#6d4c41" stroke-width="2.5"/>
      <circle cx="73" cy="59" r="11" fill="none" stroke="#6d4c41" stroke-width="2.5"/>
      <line x1="58" y1="59" x2="62" y2="59" stroke="#6d4c41" stroke-width="2.5"/>
      <!-- Eyes -->
      <circle cx="47" cy="59" r="3.5" fill="#37474f"/>
      <circle cx="73" cy="59" r="3.5" fill="#37474f"/>
      <circle cx="49" cy="58" r="1.2" fill="#fff"/>
      <circle cx="75" cy="58" r="1.2" fill="#fff"/>
      <!-- Moustache -->
      <path d="M 45 74 C 55 70, 60 76, 60 76 C 60 76, 65 70, 75 74 C 77 78, 68 83, 60 78 C 52 83, 43 78, 45 74 Z" fill="#ffffff" stroke="#cfd8dc" stroke-width="1"/>
      <!-- Smile / Mood under moustache -->
      ${mood === 'angry' ? `
        <path d="M 52 87 Q 60 82 68 87" stroke="#4a1818" stroke-width="3" fill="none" stroke-linecap="round"/>
      ` : mood === 'impatient' ? `
        <line x1="54" y1="84" x2="66" y2="84" stroke="#4a1818" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 88 52 C 88 49, 92 46, 92 46 C 92 46, 96 49, 96 52 C 96 55, 88 55, 88 52 Z" fill="#36b9cc"/>
      ` : `
        <path d="M 53 79 Q 60 88 67 79" stroke="#b71c1c" stroke-width="3" fill="none" stroke-linecap="round"/>
      `}
    </svg>
  `,

  // 3: Cool Guy (Brown hair, glasses, blue polo shirt - Image 2)
  (mood: CustomerMood = 'happy') => `
    <svg viewBox="0 0 120 140" class="avatar-svg">
      <defs>
        <radialGradient id="skin3" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#fedac2"/>
          <stop offset="100%" stop-color="#f1b590"/>
        </radialGradient>
      </defs>
      <!-- Hair -->
      <path d="M 30 46 C 30 25, 90 25, 90 46 C 94 40, 75 22, 55 22 C 35 22, 28 35, 30 46 Z" fill="#543828"/>
      <path d="M 32 45 Q 60 30 88 45 Q 60 38 32 45 Z" fill="#3d281c"/>
      <!-- Body / Blue polo -->
      <path d="M 22 140 C 22 102, 98 102, 98 140 Z" fill="#1e88e5"/>
      <polygon points="46,104 60,118 74,104 60,108" fill="#1565c0"/>
      <!-- Neck -->
      <rect x="52" y="80" width="16" height="20" rx="3" fill="#f1b590"/>
      <!-- Face -->
      <ellipse cx="60" cy="62" rx="28" ry="32" fill="url(#skin3)"/>
      <!-- Glasses -->
      <rect x="36" y="52" width="20" height="16" rx="4" fill="none" stroke="#1f2937" stroke-width="2.5"/>
      <rect x="64" y="52" width="20" height="16" rx="4" fill="none" stroke="#1f2937" stroke-width="2.5"/>
      <line x1="56" y1="59" x2="64" y2="59" stroke="#1f2937" stroke-width="2.5"/>
      <!-- Eyes -->
      <circle cx="46" cy="60" r="4" fill="#2c3e50"/>
      <circle cx="74" cy="60" r="4" fill="#2c3e50"/>
      <circle cx="48" cy="58" r="1.3" fill="#fff"/>
      <circle cx="76" cy="58" r="1.3" fill="#fff"/>
      <!-- Mouth -->
      ${mood === 'angry' ? `
        <path d="M 52 82 Q 60 76 68 82" stroke="#600" stroke-width="3" fill="none" stroke-linecap="round"/>
      ` : mood === 'impatient' ? `
        <line x1="53" y1="79" x2="67" y2="79" stroke="#600" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 87 49 C 87 46, 91 43, 91 43 C 91 43, 95 46, 95 49 C 95 52, 87 52, 87 49 Z" fill="#36b9cc"/>
      ` : `
        <path d="M 51 76 Q 60 85 69 76" stroke="#991b1b" stroke-width="3" fill="none" stroke-linecap="round"/>
      `}
    </svg>
  `
];

// Food and Ingredient SVGs
export const ICONS = {
  // Raw Patty
  rawPatty: `
    <svg viewBox="0 0 80 50" class="food-svg">
      <ellipse cx="40" cy="25" rx="36" ry="18" fill="#bc3939"/>
      <ellipse cx="40" cy="22" rx="34" ry="16" fill="#d9534f"/>
      <ellipse cx="38" cy="20" rx="30" ry="13" fill="#ea6153"/>
      <!-- marbling specks -->
      <circle cx="30" cy="18" r="2" fill="#ffd1d1"/>
      <circle cx="45" cy="22" r="2.5" fill="#ffd1d1"/>
      <circle cx="55" cy="17" r="1.8" fill="#ffd1d1"/>
    </svg>
  `,

  // Cooked Juicy Patty with grill marks
  cookedPatty: `
    <svg viewBox="0 0 80 50" class="food-svg">
      <ellipse cx="40" cy="27" rx="36" ry="17" fill="#4a2511"/>
      <ellipse cx="40" cy="23" rx="35" ry="16" fill="#783f1d"/>
      <ellipse cx="40" cy="21" rx="33" ry="14" fill="#8c4a22"/>
      <!-- Grill marks -->
      <line x1="22" y1="16" x2="42" y2="28" stroke="#381a0b" stroke-width="3" stroke-linecap="round"/>
      <line x1="32" y1="13" x2="55" y2="27" stroke="#381a0b" stroke-width="3" stroke-linecap="round"/>
      <line x1="45" y1="12" x2="65" y2="24" stroke="#381a0b" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Burnt Patty (Black with smoke indicator)
  burntPatty: `
    <svg viewBox="0 0 80 50" class="food-svg burnt">
      <ellipse cx="40" cy="25" rx="35" ry="16" fill="#1a1a1a"/>
      <ellipse cx="40" cy="22" rx="33" ry="14" fill="#2d2d2d"/>
      <!-- ash cracks -->
      <line x1="25" y1="20" x2="38" y2="24" stroke="#ff4500" stroke-width="1.5"/>
      <line x1="42" y1="18" x2="58" y2="22" stroke="#ff4500" stroke-width="1.5"/>
      <!-- X mark -->
      <path d="M 33 14 L 47 28 M 47 14 L 33 28" stroke="#e74a3b" stroke-width="3"/>
    </svg>
  `,

  // Bottom Bun
  bottomBun: `
    <svg viewBox="0 0 80 40" class="food-svg">
      <ellipse cx="40" cy="22" rx="36" ry="15" fill="#c68a4c"/>
      <ellipse cx="40" cy="18" rx="36" ry="14" fill="#e5ad68"/>
      <ellipse cx="40" cy="16" rx="34" ry="12" fill="#f4caa1"/>
    </svg>
  `,

  // Top Bun with sesame seeds
  topBun: `
    <svg viewBox="0 0 80 45" class="food-svg">
      <path d="M 6 28 C 6 8, 74 8, 74 28 C 74 34, 6 34, 6 28 Z" fill="#d9822b"/>
      <path d="M 8 26 C 10 10, 70 10, 72 26 C 70 30, 10 30, 8 26 Z" fill="#e89838"/>
      <!-- Sesame seeds -->
      <ellipse cx="25" cy="18" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(-15 25 18)"/>
      <ellipse cx="40" cy="14" rx="2.2" ry="1.2" fill="#fff3d6"/>
      <ellipse cx="55" cy="18" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(20 55 18)"/>
      <ellipse cx="32" cy="22" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(30 32 22)"/>
      <ellipse cx="48" cy="23" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(-10 48 23)"/>
    </svg>
  `,

  // Cheese slice (melted square)
  cheese: `
    <svg viewBox="0 0 80 35" class="food-svg">
      <polygon points="12,18 40,8 68,18 40,28" fill="#f6c23e"/>
      <polygon points="12,18 40,28 36,33 15,22" fill="#dda20a"/>
      <polygon points="68,18 40,28 44,33 65,22" fill="#dda20a"/>
    </svg>
  `,

  // Fresh green lettuce leaf
  lettuce: `
    <svg viewBox="0 0 80 35" class="food-svg">
      <path d="M 8 18 C 15 10, 25 24, 35 12 C 45 26, 55 10, 65 20 C 72 16, 75 22, 72 25 C 65 30, 52 26, 40 28 C 25 27, 12 30, 8 18 Z" fill="#48bb78"/>
      <path d="M 12 19 C 22 14, 32 23, 42 16 C 52 24, 62 14, 68 22" stroke="#68d391" stroke-width="2" fill="none"/>
    </svg>
  `,

  // Complete Burger on Blue Rim Plate (Iconic from Image 1 & 2)
  completeBurger: `
    <svg viewBox="0 0 100 85" class="food-svg">
      <!-- Blue Rim Plate -->
      <ellipse cx="50" cy="68" rx="46" ry="15" fill="#d9e6f2"/>
      <ellipse cx="50" cy="67" rx="43" ry="13" fill="#4a90e2"/>
      <ellipse cx="50" cy="66" rx="39" ry="11" fill="#ffffff"/>

      <!-- Bottom Bun -->
      <ellipse cx="50" cy="58" rx="32" ry="10" fill="#d9822b"/>
      <ellipse cx="50" cy="56" rx="31" ry="9" fill="#f4caa1"/>

      <!-- Cooked Patty -->
      <ellipse cx="50" cy="50" rx="33" ry="10" fill="#5c2e17"/>
      <ellipse cx="50" cy="48" rx="32" ry="9" fill="#783f1d"/>

      <!-- Melted Cheese -->
      <path d="M 22 47 L 50 40 L 78 47 L 72 52 L 50 48 L 26 53 Z" fill="#ffc107"/>
      <polygon points="32,50 35,56 42,48" fill="#e0a800"/>
      <polygon points="58,48 65,56 68,50" fill="#e0a800"/>

      <!-- Lettuce wave -->
      <path d="M 20 44 C 28 38, 36 48, 48 40 C 60 48, 70 38, 78 44 C 80 47, 72 49, 50 49 C 26 49, 18 47, 20 44 Z" fill="#38a169"/>
      <path d="M 24 43 C 32 39, 44 46, 56 41 C 68 47, 74 42, 76 44" stroke="#68d391" stroke-width="1.5" fill="none"/>

      <!-- Top Bun with sesame seeds -->
      <path d="M 20 38 C 20 16, 80 16, 80 38 C 80 43, 20 43, 20 38 Z" fill="#d9822b"/>
      <path d="M 22 36 C 24 18, 76 18, 78 36 C 76 39, 24 39, 22 36 Z" fill="#e89838"/>
      <ellipse cx="36" cy="26" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(-15 36 26)"/>
      <ellipse cx="50" cy="22" rx="2.2" ry="1.2" fill="#fff3d6"/>
      <ellipse cx="64" cy="26" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(20 64 26)"/>
      <ellipse cx="43" cy="30" rx="1.8" ry="1" fill="#fff3d6"/>
      <ellipse cx="57" cy="30" rx="1.8" ry="1" fill="#fff3d6"/>
    </svg>
  `,

  // Complete Hotdog with mustard on plate
  completeHotdog: `
    <svg viewBox="0 0 100 70" class="food-svg">
      <!-- Blue Rim Plate -->
      <ellipse cx="50" cy="55" rx="45" ry="14" fill="#d9e6f2"/>
      <ellipse cx="50" cy="54" rx="42" ry="12" fill="#4a90e2"/>
      <ellipse cx="50" cy="53" rx="38" ry="10" fill="#ffffff"/>

      <!-- Green lettuce base -->
      <path d="M 18 42 C 26 34, 38 46, 50 36 C 62 46, 74 34, 82 42 C 78 48, 22 48, 18 42 Z" fill="#48bb78"/>

      <!-- Hot Dog Bun -->
      <ellipse cx="50" cy="42" rx="34" ry="12" fill="#d9822b"/>
      <ellipse cx="50" cy="39" rx="32" ry="10" fill="#f4caa1"/>

      <!-- Grilled Sausage -->
      <path d="M 20 35 C 16 35, 16 41, 20 41 L 80 41 C 84 41, 84 35, 80 35 Z" fill="#991b1b"/>
      <path d="M 22 36 L 78 36" stroke="#b91c1c" stroke-width="3" stroke-linecap="round"/>

      <!-- Mustard Zig-Zag -->
      <path d="M 25 38 Q 30 32 35 38 Q 40 44 45 38 Q 50 32 55 38 Q 60 44 65 38 Q 70 32 75 38" stroke="#ffeb3b" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    </svg>
  `,

  // Crispy French Fries in Red Box (with golden mascot logo)
  frenchFries: `
    <svg viewBox="0 0 70 80" class="food-svg">
      <!-- Crispy Fries protruding -->
      <rect x="22" y="8" width="5" height="40" rx="1.5" fill="#f6c23e" transform="rotate(-15 22 8)"/>
      <rect x="30" y="5" width="5.5" height="42" rx="1.5" fill="#ffd15c" transform="rotate(-5 30 5)"/>
      <rect x="38" y="4" width="5.5" height="44" rx="1.5" fill="#f6c23e" transform="rotate(4 38 4)"/>
      <rect x="46" y="9" width="5" height="38" rx="1.5" fill="#eab308" transform="rotate(18 46 9)"/>
      <rect x="26" y="14" width="5" height="35" rx="1.5" fill="#facc15" transform="rotate(-8 26 14)"/>
      <rect x="35" y="12" width="6" height="38" rx="1.5" fill="#fde047"/>
      <rect x="42" y="16" width="5" height="32" rx="1.5" fill="#facc15" transform="rotate(10 42 16)"/>

      <!-- Red Fries Carton Box -->
      <polygon points="16,36 54,36 48,76 22,76" fill="#dc2626"/>
      <polygon points="16,36 54,36 52,42 18,42" fill="#b91c1c"/>
      <!-- Golden crest / logo on box -->
      <ellipse cx="35" cy="56" rx="10" ry="7" fill="#facc15"/>
      <ellipse cx="35" cy="56" rx="8" ry="5.5" fill="#dc2626"/>
      <path d="M 31 57 Q 35 52 39 57" stroke="#facc15" stroke-width="2" fill="none"/>
    </svg>
  `,

  // Tall Cold Glass of Cola with ice & straw
  coldDrink: `
    <svg viewBox="0 0 60 85" class="food-svg">
      <!-- Straw -->
      <rect x="38" y="2" width="4" height="40" rx="1" fill="#ef4444" transform="rotate(15 38 2)"/>
      <!-- Glass Cup -->
      <polygon points="14,24 46,24 41,78 19,78" fill="#2d3748" opacity="0.15"/>
      <!-- Cola Liquid -->
      <polygon points="15,30 45,30 40,76 20,76" fill="#3b1d11"/>
      <polygon points="16,32 44,32 39,74 21,74" fill="#4a2511"/>
      <!-- Ice cubes floating -->
      <rect x="22" y="34" width="8" height="8" rx="1.5" fill="#e2e8f0" opacity="0.75"/>
      <rect x="32" y="38" width="9" height="7" rx="1.5" fill="#e2e8f0" opacity="0.75"/>
      <!-- Glass Reflection Highlight -->
      <line x1="20" y1="32" x2="23" y2="72" stroke="#ffffff" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
      <!-- Rim -->
      <ellipse cx="30" cy="24" rx="16" ry="4" fill="#cbd5e1" opacity="0.8"/>
    </svg>
  `,

  // Pizza Box & Pizza Slice
  pizza: `
    <svg viewBox="0 0 85 70" class="food-svg">
      <ellipse cx="42" cy="40" rx="38" ry="24" fill="#d97706"/>
      <ellipse cx="42" cy="38" rx="35" ry="21" fill="#fbbf24"/>
      <!-- Pepperoni slices -->
      <circle cx="28" cy="35" r="5" fill="#b91c1c"/>
      <circle cx="42" cy="32" r="5.5" fill="#b91c1c"/>
      <circle cx="56" cy="36" r="5" fill="#b91c1c"/>
      <circle cx="35" cy="46" r="4.5" fill="#b91c1c"/>
      <circle cx="49" cy="45" r="4.5" fill="#b91c1c"/>
      <!-- Melted cheese strings -->
      <path d="M 20 38 Q 42 48 64 38" stroke="#fef08a" stroke-width="2" fill="none"/>
    </svg>
  `,

  // Nachos tray with dips
  nachos: `
    <svg viewBox="0 0 85 65" class="food-svg">
      <!-- Green tray -->
      <rect x="10" y="24" width="65" height="36" rx="6" fill="#22c55e"/>
      <rect x="12" y="26" width="61" height="32" rx="4" fill="#15803d"/>
      <!-- Tortilla chips -->
      <polygon points="18,48 30,30 38,48" fill="#facc15"/>
      <polygon points="32,50 44,32 54,48" fill="#eab308"/>
      <polygon points="46,49 58,32 68,48" fill="#facc15"/>
      <!-- Dip bowls -->
      <circle cx="28" cy="34" r="7" fill="#ef4444"/> <!-- salsa -->
      <circle cx="42" cy="32" r="7" fill="#84cc16"/> <!-- guacamole -->
      <circle cx="56" cy="34" r="7" fill="#f59e0b"/> <!-- cheese -->
    </svg>
  `
};

export function renderBurgerPlate(plate: BurgerPlate): string {
  return `
    <svg viewBox="0 0 100 85" class="food-svg burger-plate-svg">
      <!-- Blue Rim Plate -->
      <ellipse cx="50" cy="68" rx="46" ry="15" fill="#d9e6f2"/>
      <ellipse cx="50" cy="67" rx="43" ry="13" fill="#4a90e2"/>
      <ellipse cx="50" cy="66" rx="39" ry="11" fill="#ffffff"/>

      ${!plate.hasBottomBun ? `
        <!-- Plate center empty dashed ring -->
        <ellipse cx="50" cy="64" rx="24" ry="7" fill="none" stroke="#90cdf4" stroke-width="2" stroke-dasharray="4,3"/>
      ` : ''}

      ${plate.hasBottomBun ? `
        <!-- Bottom Bun -->
        <ellipse cx="50" cy="58" rx="32" ry="10" fill="#d9822b"/>
        <ellipse cx="50" cy="56" rx="31" ry="9" fill="#f4caa1"/>
      ` : ''}

      ${plate.hasPatty ? `
        <!-- Cooked Juicy Patty -->
        <ellipse cx="50" cy="50" rx="33" ry="10" fill="#5c2e17"/>
        <ellipse cx="50" cy="48" rx="32" ry="9" fill="#783f1d"/>
        <line x1="30" y1="46" x2="48" y2="52" stroke="#381a0b" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="45" x2="68" y2="51" stroke="#381a0b" stroke-width="2.5" stroke-linecap="round"/>
      ` : ''}

      ${plate.hasCheese ? `
        <!-- Melted Golden Cheddar Cheese -->
        <path d="M 22 47 L 50 40 L 78 47 L 72 52 L 50 48 L 26 53 Z" fill="#ffc107"/>
        <polygon points="30,49 34,57 40,48" fill="#e0a800"/>
        <polygon points="58,48 64,57 68,50" fill="#e0a800"/>
        <polygon points="45,47 48,54 52,47" fill="#e0a800"/>
      ` : ''}

      ${plate.hasLettuce ? `
        <!-- Fresh Crisp Green Lettuce Leaf -->
        <path d="M 18 43 C 26 36, 36 47, 48 38 C 60 47, 72 36, 82 43 C 82 48, 72 49, 50 49 C 26 49, 18 48, 18 43 Z" fill="#38a169"/>
        <path d="M 22 42 C 30 37, 42 45, 54 39 C 66 45, 74 39, 78 42" stroke="#68d391" stroke-width="2" fill="none" stroke-linecap="round"/>
      ` : ''}

      ${plate.hasTopBun ? `
        <!-- Top Bun with sesame seeds -->
        <path d="M 20 38 C 20 16, 80 16, 80 38 C 80 43, 20 43, 20 38 Z" fill="#d9822b"/>
        <path d="M 22 36 C 24 18, 76 18, 78 36 C 76 39, 24 39, 22 36 Z" fill="#e89838"/>
        <ellipse cx="36" cy="26" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(-15 36 26)"/>
        <ellipse cx="50" cy="22" rx="2.2" ry="1.2" fill="#fff3d6"/>
        <ellipse cx="64" cy="26" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(20 64 26)"/>
        <ellipse cx="43" cy="30" rx="1.8" ry="1" fill="#fff3d6"/>
        <ellipse cx="57" cy="30" rx="1.8" ry="1" fill="#fff3d6"/>
      ` : ''}
    </svg>
  `;
}

// Warm Restaurant Dining Hall Background SVG (Tables, Chairs, Windows, Lamps, Cafe Atmosphere)
export const RESTAURANT_BG_SVG = `
<svg viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid slice" class="restaurant-bg-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Wall Gradient (Much lighter, airy bright cafe) -->
    <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#fefaf2"/>
      <stop offset="100%" stop-color="#fbf2e3"/>
    </linearGradient>

    <!-- Wood Wainscoting (Light blonde honey wood) -->
    <linearGradient id="wainscotGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ebd0b5"/>
      <stop offset="25%" stop-color="#dfbb98"/>
      <stop offset="100%" stop-color="#c2966c"/>
    </linearGradient>

    <!-- Floor Parquet (Golden honey parquet) -->
    <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d6ab7e"/>
      <stop offset="100%" stop-color="#b07d4e"/>
    </linearGradient>

    <!-- Sun Window Sky (Bright sunny sky) -->
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="70%" stop-color="#e0f2fe"/>
      <stop offset="100%" stop-color="#f0f9ff"/>
    </linearGradient>

    <!-- Lamp Light Cone -->
    <linearGradient id="lampGlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(254, 240, 138, 0.45)"/>
      <stop offset="70%" stop-color="rgba(254, 240, 138, 0.15)"/>
      <stop offset="100%" stop-color="rgba(254, 240, 138, 0)"/>
    </linearGradient>

    <!-- Window Sunbeam (Bright sunlight) -->
    <linearGradient id="sunBeam" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.6)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0)"/>
    </linearGradient>

    <!-- Table Wood (Light blonde oak tables) -->
    <linearGradient id="tableWood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbe0c3"/>
      <stop offset="40%" stop-color="#ecc093"/>
      <stop offset="100%" stop-color="#c8945f"/>
    </linearGradient>

    <!-- Chair Cushion -->
    <linearGradient id="cushionGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
    <linearGradient id="cushionTeal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38b2ac"/>
      <stop offset="100%" stop-color="#285e61"/>
    </linearGradient>
  </defs>

  <!-- 1. Upper Wall -->
  <rect x="0" y="0" width="1200" height="210" fill="url(#wallGrad)"/>

  <!-- 2. Wood Wainscoting Wall Paneling -->
  <rect x="0" y="190" width="1200" height="70" fill="url(#wainscotGrad)"/>
  <!-- Wainscot moulding trim -->
  <rect x="0" y="186" width="1200" height="8" fill="#e2985b"/>
  <rect x="0" y="190" width="1200" height="3" fill="#5c2e12"/>
  <!-- Wainscot vertical wood slat lines -->
  <g stroke="#613113" stroke-width="2" opacity="0.45">
    ${Array.from({ length: 30 }, (_, i) => `<line x1="${i * 42}" y1="194" x2="${i * 42}" y2="260"/>`).join('')}
  </g>

  <!-- 3. Parquet Flooring -->
  <rect x="0" y="260" width="1200" height="100" fill="url(#floorGrad)"/>
  <rect x="0" y="258" width="1200" height="4" fill="#42210c"/>
  <!-- Perspective Floor Planks -->
  <g stroke="#42210c" stroke-width="2" opacity="0.5">
    <line x1="0" y1="285" x2="1200" y2="285"/>
    <line x1="0" y1="315" x2="1200" y2="315"/>
    <line x1="0" y1="345" x2="1200" y2="345"/>
    <line x1="150" y1="260" x2="90" y2="360"/>
    <line x1="320" y1="260" x2="280" y2="360"/>
    <line x1="500" y1="260" x2="480" y2="360"/>
    <line x1="700" y1="260" x2="720" y2="360"/>
    <line x1="880" y1="260" x2="920" y2="360"/>
    <line x1="1050" y1="260" x2="1110" y2="360"/>
  </g>

  <!-- 4. LEFT PANORAMIC SUNLIT WINDOW -->
  <g>
    <!-- Window Outer Frame -->
    <rect x="50" y="25" width="260" height="155" rx="8" fill="#e8c7a2" stroke="#8d5628" stroke-width="4"/>
    <!-- Glass Pane -->
    <rect x="58" y="33" width="244" height="139" rx="4" fill="url(#skyGrad)"/>
    <!-- Outdoor Trees / Sunshine View -->
    <circle cx="90" cy="145" r="45" fill="#48bb78" opacity="0.9"/>
    <circle cx="150" cy="150" r="55" fill="#38a169"/>
    <circle cx="210" cy="140" r="50" fill="#2f855a"/>
    <circle cx="270" cy="148" r="40" fill="#48bb78" opacity="0.85"/>
    <!-- Sunbeams -->
    <polygon points="60,35 140,35 240,170 120,170" fill="url(#sunBeam)"/>
    <!-- Window Grid Panes -->
    <line x1="180" y1="33" x2="180" y2="172" stroke="#8d5628" stroke-width="4"/>
    <line x1="58" y1="102" x2="302" y2="102" stroke="#8d5628" stroke-width="4"/>
    <!-- Window Sill with cute mini flower pots -->
    <rect x="42" y="176" width="276" height="10" rx="3" fill="#d4945d" stroke="#784218" stroke-width="2"/>
    <rect x="70" y="166" width="16" height="12" rx="2" fill="#c05621"/>
    <circle cx="78" cy="162" r="7" fill="#48bb78"/>
    <circle cx="78" cy="158" r="4" fill="#f56565"/>
    <rect x="250" y="166" width="16" height="12" rx="2" fill="#dd6b20"/>
    <circle cx="258" cy="161" r="7" fill="#38a169"/>
  </g>

  <!-- 5. RIGHT PANORAMIC SUNLIT WINDOW -->
  <g>
    <rect x="890" y="25" width="260" height="155" rx="8" fill="#e8c7a2" stroke="#8d5628" stroke-width="4"/>
    <rect x="898" y="33" width="244" height="139" rx="4" fill="url(#skyGrad)"/>
    <!-- Outdoor Trees -->
    <circle cx="930" cy="145" r="45" fill="#38a169"/>
    <circle cx="990" cy="150" r="55" fill="#48bb78"/>
    <circle cx="1060" cy="140" r="50" fill="#2f855a"/>
    <circle cx="1120" cy="152" r="45" fill="#38a169"/>
    <!-- Sunbeam -->
    <polygon points="900,35 980,35 1100,170 980,170" fill="url(#sunBeam)"/>
    <!-- Window Grid -->
    <line x1="1020" y1="33" x2="1020" y2="172" stroke="#8d5628" stroke-width="4"/>
    <line x1="898" y1="102" x2="1142" y2="102" stroke="#8d5628" stroke-width="4"/>
    <!-- Window Sill -->
    <rect x="882" y="176" width="276" height="10" rx="3" fill="#d4945d" stroke="#784218" stroke-width="2"/>
    <rect x="920" y="166" width="16" height="12" rx="2" fill="#c05621"/>
    <circle cx="928" cy="161" r="7" fill="#48bb78"/>
    <circle cx="928" cy="157" r="4" fill="#ecc94b"/>
  </g>

  <!-- 6. WALL DECORATIONS (Center Area) -->
  <!-- Chalkboard Menu -->
  <g>
    <!-- Frame -->
    <rect x="475" y="20" width="250" height="125" rx="8" fill="#5c2e12" stroke="#8d5628" stroke-width="4"/>
    <!-- Board -->
    <rect x="485" y="30" width="230" height="105" rx="4" fill="#1f2937"/>
    <!-- Chalk Text & Drawings -->
    <text x="600" y="52" fill="#fef08a" font-family="'Segoe UI', cursive, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">⭐ RESTORAN MENYUSI ⭐</text>
    <line x1="510" y1="58" x2="690" y2="58" stroke="#fef08a" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="505" y="76" fill="#ffffff" font-size="11" font-weight="bold">🍔 Burger ............ $25</text>
    <text x="505" y="94" fill="#ffffff" font-size="11" font-weight="bold">🌭 Hot-dog .......... $20</text>
    <text x="505" y="112" fill="#ffffff" font-size="11" font-weight="bold">🍟 Oltin Fri .......... $15</text>
    <text x="505" y="128" fill="#ffffff" font-size="11" font-weight="bold">🥤 Muzdek Kola .... $12</text>
    <!-- Little Chalk burger icon on right -->
    <circle cx="685" cy="85" r="14" fill="none" stroke="#f6c23e" stroke-width="1.5"/>
    <path d="M 675 85 Q 685 80 695 85" stroke="#f6c23e" stroke-width="2"/>
  </g>

  <!-- Framed Chef Art Print Left -->
  <g>
    <rect x="350" y="45" width="85" height="105" rx="4" fill="#ffffff" stroke="#ab6a38" stroke-width="4"/>
    <rect x="356" y="51" width="73" height="93" fill="#fed7aa"/>
    <text x="392" y="95" font-size="28" text-anchor="middle">👨‍🍳</text>
    <text x="392" y="125" fill="#7c2d12" font-size="10" font-weight="900" text-anchor="middle">MASTER CHEF</text>
  </g>

  <!-- Framed Retro Clock Right -->
  <g>
    <rect x="765" y="45" width="85" height="105" rx="4" fill="#ffffff" stroke="#ab6a38" stroke-width="4"/>
    <circle cx="807" cy="95" r="32" fill="#fff" stroke="#4a5568" stroke-width="3"/>
    <circle cx="807" cy="95" r="2.5" fill="#111"/>
    <line x1="807" y1="95" x2="807" y2="75" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="807" y1="95" x2="822" y2="95" stroke="#e53e3e" stroke-width="2" stroke-linecap="round"/>
    <text x="807" y="70" font-size="7" font-weight="bold" text-anchor="middle" fill="#666">12</text>
    <text x="807" y="124" font-size="7" font-weight="bold" text-anchor="middle" fill="#666">6</text>
  </g>

  <!-- 7. BACKGROUND DINING TABLES & CHAIRS (Stol-stullar) -->

  <!-- TABLE SET 1: Mid-Left (Perspective Table & Chairs) -->
  <g>
    <!-- Left Chair -->
    <path d="M 360 215 C 360 185, 385 185, 385 215" stroke="#4a2511" stroke-width="4" fill="none"/>
    <rect x="365" y="215" width="26" height="8" rx="2" fill="url(#cushionTeal)"/>
    <line x1="367" y1="223" x2="365" y2="255" stroke="#331a0b" stroke-width="3"/>
    <line x1="389" y1="223" x2="391" y2="255" stroke="#331a0b" stroke-width="3"/>

    <!-- Right Chair -->
    <path d="M 455 215 C 455 185, 480 185, 480 215" stroke="#4a2511" stroke-width="4" fill="none"/>
    <rect x="450" y="215" width="26" height="8" rx="2" fill="url(#cushionTeal)"/>
    <line x1="452" y1="223" x2="450" y2="255" stroke="#331a0b" stroke-width="3"/>
    <line x1="474" y1="223" x2="476" y2="255" stroke="#331a0b" stroke-width="3"/>

    <!-- Table Top & Legs -->
    <polygon points="380,215 460,215 470,235 370,235" fill="url(#tableWood)" stroke="#5c2e12" stroke-width="2"/>
    <ellipse cx="420" cy="225" rx="46" ry="12" fill="url(#tableWood)"/>
    <!-- Table Pedestal Leg -->
    <rect x="415" y="235" width="10" height="35" rx="2" fill="#331a0b"/>
    <ellipse cx="420" cy="270" rx="20" ry="6" fill="#221107"/>
    <!-- Table Condiments -->
    <rect x="416" y="210" width="8" height="12" rx="1.5" fill="#f6ad55"/>
    <circle cx="410" cy="216" r="3" fill="#cbd5e0"/>
    <circle cx="428" cy="216" r="3" fill="#718096"/>
  </g>

  <!-- TABLE SET 2: Mid-Right (Perspective Table & Chairs) -->
  <g>
    <!-- Left Chair -->
    <path d="M 720 215 C 720 185, 745 185, 745 215" stroke="#4a2511" stroke-width="4" fill="none"/>
    <rect x="725" y="215" width="26" height="8" rx="2" fill="url(#cushionGrad)"/>
    <line x1="727" y1="223" x2="725" y2="255" stroke="#331a0b" stroke-width="3"/>
    <line x1="749" y1="223" x2="751" y2="255" stroke="#331a0b" stroke-width="3"/>

    <!-- Right Chair -->
    <path d="M 815 215 C 815 185, 840 185, 840 215" stroke="#4a2511" stroke-width="4" fill="none"/>
    <rect x="810" y="215" width="26" height="8" rx="2" fill="url(#cushionGrad)"/>
    <line x1="812" y1="223" x2="810" y2="255" stroke="#331a0b" stroke-width="3"/>
    <line x1="834" y1="223" x2="836" y2="255" stroke="#331a0b" stroke-width="3"/>

    <!-- Table Top & Legs -->
    <polygon points="740,215 820,215 830,235 730,235" fill="url(#tableWood)" stroke="#5c2e12" stroke-width="2"/>
    <ellipse cx="780" cy="225" rx="46" ry="12" fill="url(#tableWood)"/>
    <!-- Table Pedestal Leg -->
    <rect x="775" y="235" width="10" height="35" rx="2" fill="#331a0b"/>
    <ellipse cx="780" cy="270" rx="20" ry="6" fill="#221107"/>
    <!-- Table Vase with flower -->
    <rect x="777" y="211" width="6" height="10" rx="1" fill="#4299e1"/>
    <circle cx="780" cy="206" r="4" fill="#ed8936"/>
  </g>

  <!-- TABLE SET 3: Foreground Left Window Dining Table (Stol-stullar) -->
  <g>
    <!-- Chair Left -->
    <path d="M 100 240 C 100 200, 135 200, 135 240" stroke="#4a2511" stroke-width="5" fill="none"/>
    <path d="M 104 215 L 131 215" stroke="#4a2511" stroke-width="3"/>
    <rect x="102" y="240" width="36" height="12" rx="3" fill="url(#cushionGrad)"/>
    <line x1="106" y1="252" x2="102" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>
    <line x1="134" y1="252" x2="138" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>

    <!-- Chair Right -->
    <path d="M 235 240 C 235 200, 270 200, 270 240" stroke="#4a2511" stroke-width="5" fill="none"/>
    <path d="M 239 215 L 266 215" stroke="#4a2511" stroke-width="3"/>
    <rect x="232" y="240" width="36" height="12" rx="3" fill="url(#cushionGrad)"/>
    <line x1="236" y1="252" x2="232" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>
    <line x1="264" y1="252" x2="268" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>

    <!-- Large Foreground Table -->
    <ellipse cx="185" cy="255" rx="65" ry="18" fill="#693310"/>
    <ellipse cx="185" cy="252" rx="64" ry="17" fill="url(#tableWood)"/>
    <ellipse cx="185" cy="248" rx="60" ry="14" fill="#df9f68"/>
    <!-- Table Sturdy Legs -->
    <rect x="180" y="260" width="12" height="45" rx="3" fill="#331a0b"/>
    <polygon points="150,305 220,305 210,312 160,312" fill="#221107"/>
    <!-- Table Condiments: Ketchup, Mustard, Napkin holder -->
    <rect x="175" y="230" width="6" height="15" rx="1.5" fill="#e53e3e"/>
    <rect x="184" y="232" width="6" height="13" rx="1.5" fill="#ecc94b"/>
    <polygon points="194,242 202,232 208,242" fill="#edf2f7"/>
  </g>

  <!-- TABLE SET 4: Foreground Right Window Dining Table (Stol-stullar) -->
  <g>
    <!-- Chair Left -->
    <path d="M 930 240 C 930 200, 965 200, 965 240" stroke="#4a2511" stroke-width="5" fill="none"/>
    <path d="M 934 215 L 961 215" stroke="#4a2511" stroke-width="3"/>
    <rect x="932" y="240" width="36" height="12" rx="3" fill="url(#cushionTeal)"/>
    <line x1="936" y1="252" x2="932" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>
    <line x1="964" y1="252" x2="968" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>

    <!-- Chair Right -->
    <path d="M 1065 240 C 1065 200, 1100 200, 1100 240" stroke="#4a2511" stroke-width="5" fill="none"/>
    <path d="M 1069 215 L 1096 215" stroke="#4a2511" stroke-width="3"/>
    <rect x="1062" y="240" width="36" height="12" rx="3" fill="url(#cushionTeal)"/>
    <line x1="1066" y1="252" x2="1062" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>
    <line x1="1094" y1="252" x2="1098" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>

    <!-- Large Foreground Table -->
    <ellipse cx="1015" cy="255" rx="65" ry="18" fill="#693310"/>
    <ellipse cx="1015" cy="252" rx="64" ry="17" fill="url(#tableWood)"/>
    <ellipse cx="1015" cy="248" rx="60" ry="14" fill="#df9f68"/>
    <!-- Table Legs -->
    <rect x="1010" y="260" width="12" height="45" rx="3" fill="#331a0b"/>
    <polygon points="980,305 1050,305 1040,312 990,312" fill="#221107"/>
    <!-- Table items -->
    <circle cx="1015" cy="240" r="5" fill="#4fd1c5"/>
    <circle cx="1015" cy="235" r="4" fill="#f687b3"/>
    <rect x="1025" y="238" width="5" height="10" rx="1" fill="#cbd5e0"/>
  </g>

  <!-- 8. LUSH POTTED PLANTS (Corners) -->
  <g>
    <!-- Left Plant -->
    <polygon points="12,250 28,250 24,285 16,285" fill="#c05621"/>
    <ellipse cx="20" cy="250" rx="9" ry="3" fill="#9c4221"/>
    <path d="M 20 250 Q 8 220 2 205 Q 16 215 20 250" fill="#2f855a"/>
    <path d="M 20 250 Q 22 210 20 190 Q 28 215 20 250" fill="#38a169"/>
    <path d="M 20 250 Q 35 225 42 210 Q 32 230 20 250" fill="#48bb78"/>

    <!-- Right Plant -->
    <polygon points="1172,250 1188,250 1184,285 1176,285" fill="#c05621"/>
    <ellipse cx="1180" cy="250" rx="9" ry="3" fill="#9c4221"/>
    <path d="M 1180 250 Q 1168 220 1162 205 Q 1176 215 1180 250" fill="#2f855a"/>
    <path d="M 1180 250 Q 1182 210 1180 190 Q 1188 215 1180 250" fill="#38a169"/>
    <path d="M 1180 250 Q 1195 225 1202 210 Q 1192 230 1180 250" fill="#48bb78"/>
  </g>

  <!-- 9. HANGING PENDANT LAMPS & WARM LIGHT CONES -->
  ${[185, 420, 780, 1015].map(x => `
    <g>
      <line x1="${x}" y1="0" x2="${x}" y2="55" stroke="#1a202c" stroke-width="2.5"/>
      <path d="M ${x - 22} 68 Q ${x} 52 ${x + 22} 68 Z" fill="#2d3748" stroke="#1a202c" stroke-width="1.5"/>
      <ellipse cx="${x}" cy="68" rx="22" ry="6" fill="#d97706"/>
      <circle cx="${x}" cy="69" r="4" fill="#fef08a"/>
      <polygon points="${x - 18},70 ${x + 18},70 ${x + 75},260 ${x - 75},260" fill="url(#lampGlow)"/>
    </g>
  `).join('')}

  <!-- 10. FRONT COUNTER SNEEZE GUARD GLASS BARRIER (Bottom Divider) -->
  <g>
    <line x1="0" y1="345" x2="1200" y2="345" stroke="#e2e8f0" stroke-width="3" opacity="0.8"/>
    <rect x="0" y="345" width="1200" height="15" fill="rgba(226, 232, 240, 0.25)"/>
    ${[120, 360, 600, 840, 1080].map(px => `
      <rect x="${px - 4}" y="338" width="8" height="22" rx="2" fill="#e2e8f0" stroke="#718096" stroke-width="1.5"/>
      <circle cx="${px}" cy="344" r="2" fill="#4a5568"/>
    `).join('')}
  </g>
</svg>
`;


