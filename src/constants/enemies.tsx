interface Enemy {
  [enemyIndex: number]: EnemyProps;
}

interface EnemyProps {
  name: string;
  boss: boolean;
  level: number;
  maxHP: number;
  currentHP: number | null;
  attack: number;
  defense: number;
  drops: EnemyDrop;
}

interface EnemyDrop {
  [dropIndex: string]: EnemyDrops;
}

interface EnemyDrops {
  name: string;
  amount: number;
}

export const ENEMIES: Enemy = {
  0: {
    name: 'Enemy #1',
    boss: false,
    level: 1,
    maxHP: 12,
    currentHP: null,
    attack: 8,
    defense: 5,
    drops: {
      exp: { name: 'Exp', amount: 5 },
      GIL: { name: 'Gil', amount: 6 },
    },
  },
  1: {
    name: 'Enemy #2',
    boss: false,
    level: 1,
    maxHP: 17,
    currentHP: null,
    attack: 11,
    defense: 9,
    drops: {
      exp: { name: 'Exp', amount: 7 },
      GIL: { name: 'Gil', amount: 8 },
    },
  },
  2: {
    name: 'Enemy #3',
    boss: false,
    level: 1,
    maxHP: 21,
    currentHP: null,
    attack: 14,
    defense: 13,
    drops: {
      exp: { name: 'Exp', amount: 9 },
      GIL: { name: 'Gil', amount: 10 },
    },
  },

  3: {
    name: 'Enemy #4',
    boss: false,
    level: 2,
    maxHP: 25,
    currentHP: null,
    attack: 15,
    defense: 16,
    drops: {
      exp: { name: 'Exp', amount: 15 },
      GIL: { name: 'Gil', amount: 20 },
    },
  },
  4: {
    name: 'Enemy #5',
    boss: false,
    level: 2,
    maxHP: 30,
    currentHP: null,
    attack: 18,
    defense: 19,
    drops: {
      exp: { name: 'Exp', amount: 20 },
      GIL: { name: 'Gil', amount: 25 },
    },
  },
  5: {
    name: 'Enemy #6',
    boss: false,
    level: 2,
    maxHP: 35,
    currentHP: null,
    attack: 22,
    defense: 23,
    drops: {
      exp: { name: 'Exp', amount: 25 },
      GIL: { name: 'Gil', amount: 30 },
    },
  },

  6: {
    name: 'Enemy #7',
    boss: false,
    level: 3,
    maxHP: 50,
    currentHP: null,
    attack: 30,
    defense: 30,
    drops: {
      exp: { name: 'Exp', amount: 40 },
      GIL: { name: 'Gil', amount: 60 },
    },
  },
  7: {
    name: 'Enemy #8',
    boss: false,
    level: 3,
    maxHP: 75,
    currentHP: null,
    attack: 40,
    defense: 40,
    drops: {
      exp: { name: 'Exp', amount: 50 },
      GIL: { name: 'Gil', amount: 75 },
    },
  },
  8: {
    name: 'Enemy #9',
    boss: false,
    level: 3,
    maxHP: 100,
    currentHP: null,
    attack: 50,
    defense: 50,
    drops: {
      exp: { name: 'Exp', amount: 60 },
      GIL: { name: 'Gil', amount: 90 },
    },
  },

  9: {
    name: 'Bossman #1',
    boss: true,
    level: 4,
    maxHP: 200,
    currentHP: null,
    attack: 80,
    defense: 70,
    drops: {
      exp: { name: 'Exp', amount: 200 },
      GIL: { name: 'Gil', amount: 300 },
      ALLAGAN_TOMESTONE: { name: 'Allagan Tomestome', amount: 12 },
    },
  },
};
