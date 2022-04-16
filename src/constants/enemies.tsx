import { EnemyInterface } from '../types/enemy';

export const ENEMIES: EnemyInterface = {
  0: {
    name: 'Roseling',
    boss: false,
    level: 1,
    maxHP: 15,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 25,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 10,
      },
      RED_LANDTRAP_LEAF: null,
      BLUE_LANDTRAP_LEAF: null,
      ICETRAP_LEAF: null,
      FRESH_MILKROOT: null,
    },
  },
  1: {
    name: 'Game Dodo',
    boss: false,
    level: 1,
    maxHP: 20,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 28,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 14,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  2: {
    name: 'Puk Hatchling',
    boss: false,
    level: 1,
    maxHP: 25,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 31,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 18,
      },
      PUK_EGG: null,
      PUK_WING: null,
    },
  },
  3: {
    name: 'Nutmuncher Marmot',
    boss: false,
    level: 2,
    maxHP: 46,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 45,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 35,
      },
      ANIMAL_SKIN: null,
      MARMOT_BLOOD: null,
    },
  },
  4: {
    name: 'Coeurl Pup',
    boss: false,
    level: 2,
    maxHP: 56,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 52,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 44,
      },
      ANIMAL_HIDE: null,
      COEURL_SKIN: null,
    },
  },
  5: {
    name: 'Naked Shrew',
    boss: false,
    level: 2,
    maxHP: 66,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 59,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 52,
      },
    },
  },
  6: {
    name: 'Rabid Jackal',
    boss: false,
    level: 3,
    maxHP: 107,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 87,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 86,
      },
      JACKAL_FANG: {
        name: 'Jackal Fang',
      },
    },
  },
  7: {
    name: 'Devilet',
    boss: false,
    level: 3,
    maxHP: 122,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 97,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 99,
      },
    },
  },
  8: {
    name: 'Wingrat',
    boss: false,
    level: 3,
    maxHP: 137,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 107,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 112,
      },
    },
  },
  9: {
    name: 'Painted Ladybug',
    boss: false,
    level: 4,
    maxHP: 198,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 149,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 163,
      },
      LADYBUG_ELYTRON: null,
    },
  },
  10: {
    name: 'Wandering Wisp',
    boss: false,
    level: 4,
    maxHP: 218,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 163,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 180,
      },
    },
  },
  11: {
    name: 'Ravenous Nannygoat',
    boss: false,
    level: 4,
    maxHP: 238,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 176,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 197,
      },
      ALDGOAT_CHUCK: null,
      ALDGOAT_HORN: null,
      ANIMAL_SKIN: null,
      BEAST_SINEW: null,
    },
  },
  12: {
    name: 'Wind Sprite',
    boss: true,
    level: 5,
    maxHP: 654,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 542,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 775,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 130,
      },
      LUMINOUS_CRYSTAL: null,
      WIND_CRYSTAL: null,
    },
  },
  13: {
    name: 'Skeleton Swordbearer',
    boss: true,
    level: 5,
    maxHP: 707,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 585,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 838,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 140,
      },
      BONE_CHIP: null,
    },
  },
  14: {
    name: 'Jellyfish',
    boss: true,
    level: 5,
    maxHP: 759,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 628,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 902,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 150,
      },
      JELLYFISH_UMBRELLA: null,
    },
  },
  15: {
    name: 'Fallen Captain',
    boss: false,
    level: 6,
    maxHP: 470,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 335,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 392,
      },
    },
  },
  16: {
    name: 'Cassiopeia',
    boss: false,
    level: 6,
    maxHP: 500,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 356,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 418,
      },
    },
  },
  17: {
    name: 'Star Marmot',
    boss: false,
    level: 6,
    maxHP: 530,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 376,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 443,
      },
      ANIMAL_SKIN: null,
      MARMOT_BLOOD: null,
    },
  },
  18: {
    name: 'Thistletail Marmot',
    boss: false,
    level: 7,
    maxHP: 651,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 459,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 545,
      },
      ANIMAL_SKIN: null,
      MARMOT_BLOOD: null,
      MARMOT_PELT: null,
    },
  },
  19: {
    name: 'Aurelia',
    boss: false,
    level: 7,
    maxHP: 686,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 483,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 575,
      },
    },
  },
  20: {
    name: 'Antelope',
    boss: false,
    level: 7,
    maxHP: 721,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 507,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 605,
      },
    },
  },
  21: {
    name: 'Dodo',
    boss: false,
    level: 8,
    maxHP: 862,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 604,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 724,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  22: {
    name: 'Thorned Roseling',
    boss: false,
    level: 8,
    maxHP: 902,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 632,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 758,
      },
    },
  },
  23: {
    name: 'Bark Weevil',
    boss: false,
    level: 8,
    maxHP: 942,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 659,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 792,
      },
    },
  },
  24: {
    name: 'Ravenous Nannygoat',
    boss: false,
    level: 9,
    maxHP: 1103,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 770,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 928,
      },
    },
  },
  25: {
    name: 'Flytrap',
    boss: false,
    level: 9,
    maxHP: 1148,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 801,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 966,
      },
      RED_LANDTRAP_LEAF: null,
    },
  },
  26: {
    name: 'Poisonous Eft',
    boss: false,
    level: 9,
    maxHP: 1193,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 832,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 1004,
      },
    },
  },
  27: {
    name: 'Fire Sprite',
    boss: true,
    level: 10,
    maxHP: 2870,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2353,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3452,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 555,
      },
      FIRE_SHARD: null,
      LUMINOUS_CRYSTAL: null,
    },
  },
  28: {
    name: 'Lowland Billygoat',
    boss: true,
    level: 10,
    maxHP: 2975,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2439,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3580,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 575,
      },
      ALDGOAT_CHUCK: null,
      ALDGOAT_HORN: null,
      ANIMAL_SKIN: null,
      BEAST_SINEW: null,
    },
  },
  29: {
    name: 'Westroad Footpad',
    boss: true,
    level: 10,
    maxHP: 3080,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2526,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3707,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 595,
      },
    },
  },
  30: {
    name: 'Land Hydra',
    boss: false,
    level: 11,
    maxHP: 1675,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1163,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 1412,
      },
      BEAST_SINEW: null,
    },
  },
  31: {
    name: 'Puroboros',
    boss: false,
    level: 11,
    maxHP: 1730,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1201,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 1459,
      },
    },
  },
  32: {
    name: 'Wharf Rat',
    boss: false,
    level: 11,
    maxHP: 1785,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1239,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 1506,
      },
      ANIMAL_SKIN: null,
      MARMOT_BLOOD: null,
    },
  },
  33: {
    name: 'Puroboros',
    boss: false,
    level: 12,
    maxHP: 2006,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1391,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 1693,
      },
    },
  },
  34: {
    name: 'Wild Dodo',
    boss: false,
    level: 12,
    maxHP: 2066,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1432,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 1744,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  35: {
    name: 'Prison Pteroc',
    boss: false,
    level: 12,
    maxHP: 2126,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1474,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 1795,
      },
      PUK_EGG: null,
      PUK_WING: null,
    },
  },
  36: {
    name: 'Blood Dragon',
    boss: false,
    level: 13,
    maxHP: 2367,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1639,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 1999,
      },
      DRAGON_BLOOD: {
        name: 'Dragon Blood',
      },
      DRAGON_FANG: {
        name: 'Dragon Fang',
      },
    },
  },
  37: {
    name: 'Thistletail Marmot',
    boss: false,
    level: 13,
    maxHP: 2432,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1684,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 2054,
      },
      MARMOT_PELT: {
        name: 'Marmot Pelt',
      },
    },
  },
  38: {
    name: 'Jungle Coeurl',
    boss: false,
    level: 13,
    maxHP: 2497,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1729,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 2109,
      },
      ANIMAL_HIDE: null,
      COEURL_SKIN: null,
    },
  },
  39: {
    name: "Will-o'-the Wykes",
    boss: false,
    level: 14,
    maxHP: 2758,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1908,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 2330,
      },
    },
  },
  40: {
    name: 'Wingrat',
    boss: false,
    level: 14,
    maxHP: 2828,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 1956,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 2390,
      },
    },
  },
  41: {
    name: 'Devilet',
    boss: false,
    level: 14,
    maxHP: 2898,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2005,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 2449,
      },
    },
  },
  42: {
    name: 'Lightning Sprite',
    boss: true,
    level: 15,
    maxHP: 6660,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 5458,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 8042,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 1280,
      },
      LIGHTNING_CRYSTAL: null,
      LUMINOUS_CRYSTAL: null,
    },
  },
  43: {
    name: 'Young Galago',
    boss: true,
    level: 15,
    maxHP: 6818,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 5588,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 8233,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 1310,
      },
    },
  },
  44: {
    name: 'Lost Wether',
    boss: true,
    level: 15,
    maxHP: 6975,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 5717,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 8425,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 1340,
      },
    },
  },
  45: {
    name: 'Ocean Roseling',
    boss: false,
    level: 16,
    maxHP: 3630,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2509,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3070,
      },
    },
  },
  46: {
    name: 'Emerald Salamander',
    boss: false,
    level: 16,
    maxHP: 3710,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2564,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3138,
      },
    },
  },
  47: {
    name: 'Drybone Shrew',
    boss: false,
    level: 16,
    maxHP: 3790,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2619,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3206,
      },
    },
  },
  48: {
    name: 'Frenzied Aurelia',
    boss: false,
    level: 17,
    maxHP: 4111,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2840,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3478,
      },
    },
  },
  49: {
    name: 'Poisonous Eft',
    boss: false,
    level: 17,
    maxHP: 4196,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2898,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3550,
      },
    },
  },
  50: {
    name: 'Young Galago',
    boss: false,
    level: 17,
    maxHP: 4281,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 2957,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3622,
      },
    },
  },
  51: {
    name: 'Ravenous Nannygoat',
    boss: false,
    level: 18,
    maxHP: 4622,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 3192,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3911,
      },
    },
  },
  52: {
    name: 'Carrion Chiglet',
    boss: false,
    level: 18,
    maxHP: 4712,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 3254,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 3988,
      },
    },
  },
  53: {
    name: 'Snowshoe Mouse',
    boss: false,
    level: 18,
    maxHP: 4802,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 3316,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 4064,
      },
      ANIMAL_SKIN: null,
      MARMOT_BLOOD: null,
    },
  },
  54: {
    name: 'Pyro',
    boss: false,
    level: 19,
    maxHP: 5163,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 3564,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 4370,
      },
    },
  },
  55: {
    name: 'Magicked Bones',
    boss: false,
    level: 19,
    maxHP: 5258,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 3630,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 4451,
      },
    },
  },
  56: {
    name: 'Fat Dodo',
    boss: false,
    level: 19,
    maxHP: 5353,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 3695,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 4532,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  57: {
    name: 'Anemone',
    boss: true,
    level: 20,
    maxHP: 12026,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 9857,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 14545,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 2305,
      },
    },
  },
  58: {
    name: 'Cockatrice',
    boss: true,
    level: 20,
    maxHP: 12236,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 10029,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 14800,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 2345,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  59: {
    name: 'Crazed Sprite',
    boss: true,
    level: 20,
    maxHP: 12446,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 10202,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 15055,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 2385,
      },
      FIRE_SHARD: null,
      LIGHTNING_CRYSTAL: null,
      LUMINOUS_CRYSTAL: null,
    },
  },
  60: {
    name: 'Pit Coeurl',
    boss: false,
    level: 21,
    maxHP: 6335,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 4372,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 5365,
      },
      ANIMAL_HIDE: null,
      COEURL_SKIN: null,
    },
  },
  61: {
    name: 'Anemone',
    boss: false,
    level: 21,
    maxHP: 6440,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 4444,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 5454,
      },
    },
  },
  62: {
    name: 'Bloodshore Bell',
    boss: false,
    level: 21,
    maxHP: 6545,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 4516,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 5543,
      },
    },
  },
  63: {
    name: 'Cellar Puk',
    boss: false,
    level: 22,
    maxHP: 6966,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 4806,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 5900,
      },
    },
  },
  64: {
    name: '',
    boss: false,
    level: 22,
    maxHP: 7076,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 4882,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 5994,
      },
    },
  },
  65: {
    name: 'Bark Weevil',
    boss: false,
    level: 22,
    maxHP: 7186,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 4958,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 6087,
      },
    },
  },
  66: {
    name: 'Stumbling Funguar',
    boss: false,
    level: 23,
    maxHP: 7627,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 5262,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 6461,
      },
    },
  },
  67: {
    name: 'Westroad Footpad',
    boss: false,
    level: 23,
    maxHP: 7742,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 5341,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 6559,
      },
    },
  },
  68: {
    name: 'Snapping Shrew',
    boss: false,
    level: 23,
    maxHP: 7857,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 5420,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 6657,
      },
    },
  },
  69: {
    name: 'Poisonous Flytrap',
    boss: false,
    level: 24,
    maxHP: 8318,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 5738,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 7048,
      },
      RED_LANDTRAP_LEAF: null,
      BLUE_LANDTRAP_LEAF: null,
      ICETRAP_LEAF: null,
      FRESH_MILKROOT: null,
    },
  },
  70: {
    name: 'Vengeful Soul',
    boss: false,
    level: 24,
    maxHP: 8438,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 5821,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 7150,
      },
    },
  },
  71: {
    name: 'Blast',
    boss: false,
    level: 24,
    maxHP: 8558,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 5903,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 7252,
      },
    },
  },
  72: {
    name: 'Dark Sprite',
    boss: true,
    level: 25,
    maxHP: 18966,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 15549,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 22960,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 3630,
      },
      FIRE_SHARD: null,
      LIGHTNING_CRYSTAL: null,
      WIND_CRYSTAL: null,
    },
  },
  73: {
    name: 'Puk Hatchling',
    boss: true,
    level: 25,
    maxHP: 19229,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 15765,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 23278,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 3680,
      },
    },
  },
  74: {
    name: 'Ladybug',
    boss: true,
    level: 25,
    maxHP: 19491,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 15981,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 23597,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 3730,
      },
    },
  },
  75: {
    name: 'Flytrap',
    boss: false,
    level: 26,
    maxHP: 9790,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 6752,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 8297,
      },
    },
  },
  76: {
    name: 'undefined',
    boss: false,
    level: 26,
    maxHP: 9920,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 6842,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 8408,
      },
    },
  },
  77: {
    name: 'Elder Longhorn',
    boss: false,
    level: 26,
    maxHP: 10050,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 6931,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 8518,
      },
      ALDGOAT_CHUCK: null,
      ALDGOAT_HORN: null,
      ANIMAL_SKIN: null,
      BEAST_SINEW: null,
    },
  },
  78: {
    name: 'Wet Rat',
    boss: false,
    level: 27,
    maxHP: 10571,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 7290,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 8960,
      },
      ANIMAL_SKIN: null,
      MARMOT_BLOOD: null,
    },
  },
  79: {
    name: 'Salamander',
    boss: false,
    level: 27,
    maxHP: 10706,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 7383,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 9075,
      },
    },
  },
  80: {
    name: 'Corroded Coblyn',
    boss: false,
    level: 27,
    maxHP: 10841,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 7476,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 9190,
      },
    },
  },
  81: {
    name: 'Corroded Coblyn',
    boss: false,
    level: 28,
    maxHP: 11382,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 7849,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 9649,
      },
    },
  },
  82: {
    name: 'Ravenous Billygoat',
    boss: false,
    level: 28,
    maxHP: 11522,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 7946,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 9768,
      },
    },
  },
  83: {
    name: 'Yarzon Bleeder',
    boss: false,
    level: 28,
    maxHP: 11662,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 8042,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 9887,
      },
    },
  },
  84: {
    name: 'Diatryma',
    boss: false,
    level: 29,
    maxHP: 12223,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 8429,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 10363,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  85: {
    name: 'Fallen Captain',
    boss: false,
    level: 29,
    maxHP: 12368,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 8529,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 10486,
      },
    },
  },
  86: {
    name: 'Corroded Coblyn',
    boss: false,
    level: 29,
    maxHP: 12513,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 8629,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 10609,
      },
    },
  },
  87: {
    name: 'Deep-stained Sprite',
    boss: true,
    level: 30,
    maxHP: 27482,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 22536,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 33287,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 5255,
      },
      FIRE_SHARD: null,
      LIGHTNING_CRYSTAL: null,
      LUMINOUS_CRYSTAL: null,
      WIND_CRYSTAL: null,
    },
  },
  88: {
    name: 'Drybone Shrew',
    boss: true,
    level: 30,
    maxHP: 27797,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 22795,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 33670,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 5315,
      },
    },
  },
  89: {
    name: 'Peryton',
    boss: true,
    level: 30,
    maxHP: 28112,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 23053,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 34052,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 5375,
      },
      PUK_EGG: null,
      PUK_WING: null,
    },
  },
  90: {
    name: 'Storm Blast',
    boss: false,
    level: 31,
    maxHP: 13995,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 9650,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 11867,
      },
    },
  },
  91: {
    name: 'Yarzon Bleeder',
    boss: false,
    level: 31,
    maxHP: 14150,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 9757,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 11999,
      },
    },
  },
  92: {
    name: 'Raptor',
    boss: false,
    level: 31,
    maxHP: 14305,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 9864,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 12131,
      },
    },
  },
  93: {
    name: 'Gas Bomb',
    boss: false,
    level: 32,
    maxHP: 14926,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 10292,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 12658,
      },
    },
  },
  94: {
    name: 'Fallen Captain',
    boss: false,
    level: 32,
    maxHP: 15086,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 10402,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 12794,
      },
    },
  },
  95: {
    name: 'Sabotender Del Sol',
    boss: false,
    level: 32,
    maxHP: 15246,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 10513,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 12930,
      },
    },
  },
  96: {
    name: 'Stray Dodo',
    boss: false,
    level: 33,
    maxHP: 15887,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 10954,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 13474,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  97: {
    name: 'Fallen Pikeman',
    boss: false,
    level: 33,
    maxHP: 16052,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 11068,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 13614,
      },
    },
  },
  98: {
    name: 'Iron Coblyn',
    boss: false,
    level: 33,
    maxHP: 16217,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 11182,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 13754,
      },
    },
  },
  99: {
    name: 'Raptor',
    boss: false,
    level: 34,
    maxHP: 16878,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 11637,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 14315,
      },
    },
  },
  100: {
    name: 'Land Hydra',
    boss: false,
    level: 34,
    maxHP: 17048,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 11755,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 14460,
      },
    },
  },
  101: {
    name: 'Roseling',
    boss: false,
    level: 34,
    maxHP: 17218,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 11872,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 14604,
      },
    },
  },
  102: {
    name: 'Master Coeurl',
    boss: true,
    level: 35,
    maxHP: 37572,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 30816,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 45527,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 7180,
      },
      ANIMAL_HIDE: null,
      COEURL_SKIN: null,
    },
  },
  103: {
    name: 'Plains Footpad',
    boss: true,
    level: 35,
    maxHP: 37940,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 31118,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 45973,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 7250,
      },
    },
  },
  104: {
    name: 'Bloodthirsty Wolf',
    boss: true,
    level: 35,
    maxHP: 38307,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 31419,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 46420,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 7320,
      },
    },
  },
  105: {
    name: 'Milkroot Sapling',
    boss: false,
    level: 36,
    maxHP: 18950,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 13065,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 16075,
      },
      RED_LANDTRAP_LEAF: null,
      BLUE_LANDTRAP_LEAF: null,
      ICETRAP_LEAF: null,
      FRESH_MILKROOT: null,
    },
  },
  106: {
    name: 'Frenzied Aurelia',
    boss: false,
    level: 36,
    maxHP: 19130,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 13190,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 16228,
      },
    },
  },
  107: {
    name: 'Shore Slug',
    boss: false,
    level: 36,
    maxHP: 19310,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 13314,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 16381,
      },
    },
  },
  108: {
    name: 'Deepvoid Deathmouse',
    boss: false,
    level: 37,
    maxHP: 20031,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 13811,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 16993,
      },
      ANIMAL_SKIN: null,
      MARMOT_BLOOD: null,
    },
  },
  109: {
    name: '',
    boss: false,
    level: 37,
    maxHP: 20216,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 13938,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 17150,
      },
    },
  },
  110: {
    name: 'Val Icetrap',
    boss: false,
    level: 37,
    maxHP: 20401,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 14066,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 17307,
      },
      RED_LANDTRAP_LEAF: null,
      BLUE_LANDTRAP_LEAF: null,
      ICETRAP_LEAF: null,
      FRESH_MILKROOT: null,
    },
  },
  111: {
    name: 'Kalong',
    boss: false,
    level: 38,
    maxHP: 21142,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 14577,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 17936,
      },
    },
  },
  112: {
    name: 'Gnat',
    boss: false,
    level: 38,
    maxHP: 21332,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 14708,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 18098,
      },
    },
  },
  113: {
    name: 'Mourning Billygoat',
    boss: false,
    level: 38,
    maxHP: 21522,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 14839,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 18259,
      },
      ALDGOAT_CHUCK: null,
      ALDGOAT_HORN: null,
      ANIMAL_SKIN: null,
      BEAST_SINEW: null,
    },
  },
  114: {
    name: 'Peridot Doblyn',
    boss: false,
    level: 39,
    maxHP: 22283,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 15363,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 18905,
      },
    },
  },
  115: {
    name: 'Cellar Puk',
    boss: false,
    level: 39,
    maxHP: 22478,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 15498,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 19071,
      },
    },
  },
  116: {
    name: 'Poisonous Eft',
    boss: false,
    level: 39,
    maxHP: 22673,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 15632,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 19237,
      },
    },
  },
  117: {
    name: 'Scalepuk',
    boss: true,
    level: 40,
    maxHP: 49238,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 40389,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 59680,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 9405,
      },
    },
  },
  118: {
    name: 'Pharosfly',
    boss: true,
    level: 40,
    maxHP: 49658,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 40734,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 60190,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 9485,
      },
    },
  },
  119: {
    name: 'Carrion Chiglet',
    boss: true,
    level: 40,
    maxHP: 50078,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 41080,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 60700,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 9565,
      },
    },
  },
  120: {
    name: 'Stumbling Funguar',
    boss: false,
    level: 41,
    maxHP: 24655,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 16999,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 20920,
      },
    },
  },
  121: {
    name: 'Thorned Roseling',
    boss: false,
    level: 41,
    maxHP: 24860,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 17140,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 21094,
      },
    },
  },
  122: {
    name: 'Sea Puk',
    boss: false,
    level: 41,
    maxHP: 25065,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 17281,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 21268,
      },
    },
  },
  123: {
    name: 'Skeleton Swordbearer',
    boss: false,
    level: 42,
    maxHP: 25886,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 17847,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 21965,
      },
    },
  },
  124: {
    name: 'Blast',
    boss: false,
    level: 42,
    maxHP: 26096,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 17992,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 22144,
      },
    },
  },
  125: {
    name: 'Bloodshore Bell',
    boss: false,
    level: 42,
    maxHP: 26306,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 18137,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 22322,
      },
    },
  },
  126: {
    name: 'Magicked Bones',
    boss: false,
    level: 43,
    maxHP: 27147,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 18717,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 23036,
      },
    },
  },
  127: {
    name: 'Yarzon Bleeder',
    boss: false,
    level: 43,
    maxHP: 27362,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 18865,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 23219,
      },
    },
  },
  128: {
    name: 'undefined',
    boss: false,
    level: 43,
    maxHP: 27577,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 19013,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 23402,
      },
    },
  },
  129: {
    name: 'Fat Dodo',
    boss: false,
    level: 44,
    maxHP: 28438,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 19607,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 24133,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  130: {
    name: 'Bark Weevil',
    boss: false,
    level: 44,
    maxHP: 28658,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 19759,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 24320,
      },
    },
  },
  131: {
    name: 'Jellyfish',
    boss: false,
    level: 44,
    maxHP: 28878,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 19910,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 24507,
      },
    },
  },
  132: {
    name: 'Thistletail Marmot',
    boss: true,
    level: 45,
    maxHP: 62478,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 51257,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 75745,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 11930,
      },
    },
  },
  133: {
    name: 'Wild Jackal',
    boss: true,
    level: 45,
    maxHP: 62951,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 51645,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 76318,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 12020,
      },
    },
  },
  134: {
    name: 'Antelope',
    boss: true,
    level: 45,
    maxHP: 63423,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 52033,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 76892,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 12110,
      },
    },
  },
  135: {
    name: 'Black Bat',
    boss: false,
    level: 46,
    maxHP: 31110,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 21449,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 26402,
      },
    },
  },
  136: {
    name: 'Game Dodo',
    boss: false,
    level: 46,
    maxHP: 31340,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 21608,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 26598,
      },
      AANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  137: {
    name: 'Mossy Goobbue',
    boss: false,
    level: 46,
    maxHP: 31570,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 21766,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 26793,
      },
    },
  },
  138: {
    name: 'Corroded Coblyn',
    boss: false,
    level: 47,
    maxHP: 32491,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 22401,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 27575,
      },
    },
  },
  139: {
    name: 'Loaghtan',
    boss: false,
    level: 47,
    maxHP: 32726,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 22563,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 27775,
      },
      ALDGOAT_CHUCK: null,
      ALDGOAT_HORN: null,
      ANIMAL_SKIN: null,
      BEAST_SINEW: null,
    },
  },
  140: {
    name: 'Flytrap',
    boss: false,
    level: 47,
    maxHP: 32961,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 22726,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 27975,
      },
    },
  },
  141: {
    name: 'Vulture',
    boss: false,
    level: 48,
    maxHP: 33902,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 23374,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 28774,
      },
    },
  },
  142: {
    name: 'Anemone',
    boss: false,
    level: 48,
    maxHP: 34142,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 23540,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 28978,
      },
    },
  },
  143: {
    name: 'Painted Ladybug',
    boss: false,
    level: 48,
    maxHP: 34382,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 23705,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 29182,
      },
    },
  },
  144: {
    name: 'Dark Matter Coeurl',
    boss: false,
    level: 49,
    maxHP: 35343,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 24368,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 29998,
      },
      ANIMAL_HIDE: null,
      COEURL_SKIN: null,
    },
  },
  145: {
    name: 'Aurelia',
    boss: false,
    level: 49,
    maxHP: 35588,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 24537,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 30206,
      },
    },
  },
  146: {
    name: 'Mossy Goobbue',
    boss: false,
    level: 49,
    maxHP: 35833,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 24706,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 30414,
      },
    },
  },
  147: {
    name: 'White Joker',
    boss: true,
    level: 50,
    maxHP: 77294,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 63418,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 93722,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 14755,
      },
      ANIMAL_SKIN: null,
      BEAST_SINEW: null,
      MARMOT_BLOOD: null,
    },
  },
  148: {
    name: 'Yarzon Bleeder',
    boss: true,
    level: 50,
    maxHP: 77819,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 63849,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 94360,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 14855,
      },
    },
  },
  149: {
    name: 'Dark Matter Pteroc',
    boss: true,
    level: 50,
    maxHP: 78344,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 64281,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 94997,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 14955,
      },
      PUK_EGG: null,
      PUK_WING: null,
    },
  },
  150: {
    name: 'Nightwolf',
    boss: false,
    level: 51,
    maxHP: 38315,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 26417,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 32522,
      },
    },
  },
  151: {
    name: 'Antling Digger',
    boss: false,
    level: 51,
    maxHP: 38570,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 26593,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 32739,
      },
    },
  },
  152: {
    name: 'Ravenous Nannygoat',
    boss: false,
    level: 51,
    maxHP: 38825,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 26769,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 32956,
      },
    },
  },
  153: {
    name: 'Toxic Toad',
    boss: false,
    level: 52,
    maxHP: 39846,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 27473,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 33823,
      },
    },
  },
  154: {
    name: 'Bloodthirsty Wolf',
    boss: false,
    level: 52,
    maxHP: 40106,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 27652,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 34044,
      },
    },
  },
  155: {
    name: 'Thistletail Marmot',
    boss: false,
    level: 52,
    maxHP: 40366,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 27831,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 34265,
      },
    },
  },
  156: {
    name: 'Vulture',
    boss: false,
    level: 53,
    maxHP: 41407,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 28549,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 35149,
      },
    },
  },
  157: {
    name: 'Wandering Wisp',
    boss: false,
    level: 53,
    maxHP: 41672,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 28732,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 35374,
      },
    },
  },
  158: {
    name: 'Blast',
    boss: false,
    level: 53,
    maxHP: 41937,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 28915,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 35599,
      },
    },
  },
  159: {
    name: 'Blast',
    boss: false,
    level: 54,
    maxHP: 42998,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 29646,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 36500,
      },
    },
  },
  160: {
    name: 'Cellar Puk',
    boss: false,
    level: 54,
    maxHP: 43268,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 29832,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 36730,
      },
    },
  },
  161: {
    name: 'Maidenbug',
    boss: false,
    level: 54,
    maxHP: 43538,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 30019,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 36959,
      },
    },
  },
  162: {
    name: 'Snapping Shrew',
    boss: true,
    level: 55,
    maxHP: 93684,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 76873,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 113612,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 17880,
      },
    },
  },
  163: {
    name: 'Cellar Puk',
    boss: true,
    level: 55,
    maxHP: 94262,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 77348,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 114313,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 17990,
      },
    },
  },
  164: {
    name: 'Brine Bogy',
    boss: true,
    level: 55,
    maxHP: 94839,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 77822,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 115015,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 18100,
      },
    },
  },
  165: {
    name: 'Raptor',
    boss: false,
    level: 56,
    maxHP: 46270,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 31902,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 39280,
      },
    },
  },
  166: {
    name: 'Thistletail Marmot',
    boss: false,
    level: 56,
    maxHP: 46550,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 32096,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 39518,
      },
    },
  },
  167: {
    name: 'Apkallu',
    boss: false,
    level: 56,
    maxHP: 46830,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 32289,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 39756,
      },
    },
  },
  168: {
    name: 'Rabid Jackal',
    boss: false,
    level: 57,
    maxHP: 47951,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 33062,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 40708,
      },
    },
  },
  169: {
    name: 'Gigantoad',
    boss: false,
    level: 57,
    maxHP: 48236,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 33258,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 40950,
      },
    },
  },
  170: {
    name: 'Ocean Roseling',
    boss: false,
    level: 57,
    maxHP: 48521,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 33455,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 41192,
      },
    },
  },
  171: {
    name: 'Raptor',
    boss: false,
    level: 58,
    maxHP: 49662,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 34242,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 42161,
      },
    },
  },
  172: {
    name: 'Kalong',
    boss: false,
    level: 58,
    maxHP: 49952,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 34442,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 42408,
      },
    },
  },
  173: {
    name: 'Hoverfly Swarm',
    boss: false,
    level: 58,
    maxHP: 50242,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 34642,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 42654,
      },
    },
  },
  174: {
    name: 'Morbol',
    boss: false,
    level: 59,
    maxHP: 51403,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 35442,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 43640,
      },
    },
  },
  175: {
    name: 'Antelope',
    boss: false,
    level: 59,
    maxHP: 51698,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 35646,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 43891,
      },
    },
  },
  176: {
    name: 'Young Galago',
    boss: false,
    level: 59,
    maxHP: 51993,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 35849,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 44142,
      },
    },
  },
  177: {
    name: 'Eroded Earth Sprite',
    boss: true,
    level: 60,
    maxHP: 111650,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 91622,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 135415,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 21305,
      },
      EARTH_CRYSTAL: null,
      LUMINOUS_CRYSTAL: null,
    },
  },
  178: {
    name: 'Vengeful Soul',
    boss: true,
    level: 60,
    maxHP: 112280,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 92140,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 136180,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 21425,
      },
    },
  },
  179: {
    name: 'Corrupted Sprite',
    boss: true,
    level: 60,
    maxHP: 112910,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 92657,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 136945,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 21545,
      },
      FIRE_SHARD: null,
      LIGHTNING_CRYSTAL: null,
      LUMINOUS_CRYSTAL: null,
      WIND_CRYSTAL: null,
    },
  },
  180: {
    name: 'Iron Coblyn',
    boss: false,
    level: 61,
    maxHP: 54975,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 37906,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 46675,
      },
    },
  },
  181: {
    name: 'Bark Weevil',
    boss: false,
    level: 61,
    maxHP: 55280,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 38116,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 46934,
      },
    },
  },
  182: {
    name: 'Spriggan Collector',
    boss: false,
    level: 61,
    maxHP: 55585,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 38326,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 47193,
      },
    },
  },
  183: {
    name: 'Raptor',
    boss: false,
    level: 62,
    maxHP: 56806,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 39168,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 48230,
      },
    },
  },
  184: {
    name: 'Nix',
    boss: false,
    level: 62,
    maxHP: 57116,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 39382,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 48494,
      },
    },
  },
  185: {
    name: 'Antling Digger',
    boss: false,
    level: 62,
    maxHP: 57426,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 39596,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 48757,
      },
    },
  },
  186: {
    name: 'Sea Hare',
    boss: false,
    level: 63,
    maxHP: 58667,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 40452,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 49811,
      },
    },
  },
  187: {
    name: 'Bastet',
    boss: false,
    level: 63,
    maxHP: 58982,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 40669,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 50079,
      },
      ANIMAL_HIDE: null,
      COEURL_SKIN: null,
    },
  },
  188: {
    name: 'Hoverfly Swarm',
    boss: false,
    level: 63,
    maxHP: 59297,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 40886,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 50347,
      },
    },
  },
  189: {
    name: 'Westroad Footpad',
    boss: false,
    level: 64,
    maxHP: 60558,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 41756,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 51418,
      },
    },
  },
  190: {
    name: 'Zadnor Yamaa',
    boss: false,
    level: 64,
    maxHP: 60878,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 41977,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 51690,
      },
      ALDGOAT_CHUCK: null,
      ALDGOAT_HORN: null,
      ANIMAL_SKIN: null,
      BEAST_SINEW: null,
    },
  },
  191: {
    name: 'Hoverfly Swarm',
    boss: false,
    level: 64,
    maxHP: 61198,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 42197,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 51962,
      },
    },
  },
  192: {
    name: 'Fallen Captain',
    boss: true,
    level: 65,
    maxHP: 131190,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 107665,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 159130,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 25030,
      },
    },
  },
  193: {
    name: 'Dormouse',
    boss: true,
    level: 65,
    maxHP: 131873,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 108225,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 159958,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 25160,
      },
    },
  },
  194: {
    name: 'Aurelia',
    boss: true,
    level: 65,
    maxHP: 132555,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 108786,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 160787,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 25290,
      },
    },
  },
  195: {
    name: 'Thistletail Marmot',
    boss: false,
    level: 66,
    maxHP: 64430,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 44426,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 54707,
      },
    },
  },
  196: {
    name: 'Fallen Archmage',
    boss: false,
    level: 66,
    maxHP: 64760,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 44654,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 54988,
      },
    },
  },
  197: {
    name: 'Kobold Supplicant',
    boss: false,
    level: 66,
    maxHP: 65090,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 44881,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 55268,
      },
    },
  },
  198: {
    name: 'Wandering Wisp',
    boss: false,
    level: 67,
    maxHP: 66411,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 45792,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 56390,
      },
    },
  },
  199: {
    name: 'Errant Soul',
    boss: false,
    level: 67,
    maxHP: 66746,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 46023,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 56675,
      },
    },
  },
  200: {
    name: 'Gnat',
    boss: false,
    level: 67,
    maxHP: 67081,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 46255,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 56960,
      },
    },
  },
  201: {
    name: 'Flytrap',
    boss: false,
    level: 68,
    maxHP: 68422,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 47179,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 58099,
      },
    },
  },
  202: {
    name: 'Dormouse',
    boss: false,
    level: 68,
    maxHP: 68762,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 47414,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 58388,
      },
    },
  },
  203: {
    name: 'Antelope',
    boss: false,
    level: 68,
    maxHP: 69102,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 47648,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 58677,
      },
    },
  },
  204: {
    name: 'Mossy Goobbue',
    boss: false,
    level: 69,
    maxHP: 70463,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 48587,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 59833,
      },
    },
  },
  205: {
    name: 'Devilet',
    boss: false,
    level: 69,
    maxHP: 70808,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 48825,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 60126,
      },
    },
  },
  206: {
    name: 'Gnat',
    boss: false,
    level: 69,
    maxHP: 71153,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 49063,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 60419,
      },
    },
  },
  207: {
    name: 'Jaculus',
    boss: true,
    level: 70,
    maxHP: 152306,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 125001,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 184757,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 29055,
      },
      PUK_EGG: null,
      PUK_WING: null,
    },
  },
  208: {
    name: 'Jellyfish',
    boss: true,
    level: 70,
    maxHP: 153041,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 125604,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 185650,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 29195,
      },
    },
  },
  209: {
    name: 'Ladybug',
    boss: true,
    level: 70,
    maxHP: 153776,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 126208,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 186542,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 29335,
      },
    },
  },
  210: {
    name: 'Iron Coblyn',
    boss: false,
    level: 71,
    maxHP: 74635,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 51464,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 63377,
      },
    },
  },
  211: {
    name: 'Bloodshore Bell',
    boss: false,
    level: 71,
    maxHP: 74990,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 51709,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 63679,
      },
    },
  },
  212: {
    name: 'Giant Crab',
    boss: false,
    level: 71,
    maxHP: 75345,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 51954,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 63981,
      },
    },
  },
  213: {
    name: 'Megalocrab',
    boss: false,
    level: 72,
    maxHP: 76766,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 52934,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 65188,
      },
    },
  },
  214: {
    name: 'Cellar Puk',
    boss: false,
    level: 72,
    maxHP: 77126,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 53182,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 65494,
      },
    },
  },
  215: {
    name: 'Black Bat',
    boss: false,
    level: 72,
    maxHP: 77486,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 53430,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 65800,
      },
    },
  },
  216: {
    name: 'Flytrap',
    boss: false,
    level: 73,
    maxHP: 78927,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 54424,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 67024,
      },
    },
  },
  217: {
    name: "Friar's Lantern",
    boss: false,
    level: 73,
    maxHP: 79292,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 54676,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 67334,
      },
    },
  },
  218: {
    name: 'Snapping Shrew',
    boss: false,
    level: 73,
    maxHP: 79657,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 54928,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 67644,
      },
    },
  },
  219: {
    name: 'Iron Coblyn',
    boss: false,
    level: 74,
    maxHP: 81118,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 55935,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 68885,
      },
    },
  },
  220: {
    name: 'Beady Beetle',
    boss: false,
    level: 74,
    maxHP: 81488,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 56190,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 69200,
      },
    },
  },
  221: {
    name: 'Kobold Supplicant',
    boss: false,
    level: 74,
    maxHP: 81858,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 56446,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 69514,
      },
    },
  },
  222: {
    name: 'Stray Dodo',
    boss: true,
    level: 75,
    maxHP: 174996,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 143631,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 212297,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 33380,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TERNDERLOIN: null,
    },
  },
  223: {
    name: 'Thistletail Marmot',
    boss: true,
    level: 75,
    maxHP: 175784,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 144278,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 213253,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 33530,
      },
    },
  },
  224: {
    name: 'Yarzon Scavanger',
    boss: true,
    level: 75,
    maxHP: 176571,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 144924,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 214210,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 33680,
      },
    },
  },
  225: {
    name: 'Frenzied Aurelia',
    boss: false,
    level: 76,
    maxHP: 85590,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 59019,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 72685,
      },
    },
  },
  226: {
    name: 'Smolenkos',
    boss: false,
    level: 76,
    maxHP: 85970,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 59282,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 73008,
      },
    },
  },
  227: {
    name: 'Carrion Chigoe',
    boss: false,
    level: 76,
    maxHP: 86350,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 59544,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 73331,
      },
    },
  },
  228: {
    name: 'Star Marmot',
    boss: false,
    level: 77,
    maxHP: 87871,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 60593,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 74623,
      },
    },
  },
  229: {
    name: 'Drybone Shrew',
    boss: false,
    level: 77,
    maxHP: 88256,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 60858,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 74950,
      },
    },
  },
  230: {
    name: 'Snipper',
    boss: false,
    level: 77,
    maxHP: 88641,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 61124,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 75277,
      },
    },
  },
  231: {
    name: 'Ravenous Nannygoat',
    boss: false,
    level: 78,
    maxHP: 90182,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 62187,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 76586,
      },
    },
  },
  232: {
    name: 'Corroded Coblyn',
    boss: false,
    level: 78,
    maxHP: 90572,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 62456,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 76918,
      },
    },
  },
  233: {
    name: 'Sea Hare',
    boss: false,
    level: 78,
    maxHP: 90962,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 62725,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 77249,
      },
    },
  },
  234: {
    name: 'Syrphid Cloud',
    boss: false,
    level: 79,
    maxHP: 92523,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 63801,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 78575,
      },
    },
  },
  235: {
    name: 'Gigantoad',
    boss: false,
    level: 79,
    maxHP: 92918,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 64074,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 78911,
      },
    },
  },
  236: {
    name: 'Spriggan Collector',
    boss: false,
    level: 79,
    maxHP: 93313,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 64346,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 79247,
      },
    },
  },
  237: {
    name: 'Morbol',
    boss: true,
    level: 80,
    maxHP: 199262,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 163554,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 241750,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 38005,
      },
    },
  },
  238: {
    name: 'Corroded Coblyn',
    boss: true,
    level: 80,
    maxHP: 200102,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 164245,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 242770,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 38165,
      },
    },
  },
  239: {
    name: 'Magicked Bones',
    boss: true,
    level: 80,
    maxHP: 200942,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 164935,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 243790,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 38325,
      },
    },
  },
  240: {
    name: 'Vengeful Soul',
    boss: false,
    level: 81,
    maxHP: 97295,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 67093,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 82630,
      },
    },
  },
  241: {
    name: 'Chiglet',
    boss: false,
    level: 81,
    maxHP: 97700,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 67372,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 82974,
      },
    },
  },
  242: {
    name: 'Antelope',
    boss: false,
    level: 81,
    maxHP: 98105,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 67651,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 83318,
      },
    },
  },
  243: {
    name: 'Cellar Puk',
    boss: false,
    level: 82,
    maxHP: 99726,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 68769,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 84695,
      },
    },
  },
  244: {
    name: 'Fallen Pikeman',
    boss: false,
    level: 82,
    maxHP: 100136,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 69052,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 85044,
      },
    },
  },
  245: {
    name: 'Kobold Supplicant',
    boss: false,
    level: 82,
    maxHP: 100546,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 69335,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 85392,
      },
    },
  },
  246: {
    name: 'Puroboros',
    boss: false,
    level: 83,
    maxHP: 102187,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 70467,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 86786,
      },
    },
  },
  247: {
    name: 'Flamedrake',
    boss: false,
    level: 83,
    maxHP: 102602,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 70753,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 87139,
      },
    },
  },
  248: {
    name: 'Basilisk',
    boss: false,
    level: 83,
    maxHP: 103017,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 71039,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 87492,
      },
    },
  },
  249: {
    name: 'Copper Coblyn',
    boss: false,
    level: 84,
    maxHP: 104678,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 72185,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 88903,
      },
    },
  },
  250: {
    name: 'Westroad Footpad',
    boss: false,
    level: 84,
    maxHP: 105098,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 72475,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 89260,
      },
    },
  },
  251: {
    name: 'Frenzied Aurelia',
    boss: false,
    level: 84,
    maxHP: 105518,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 72764,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 89617,
      },
    },
  },
  252: {
    name: 'Plains Rat',
    boss: true,
    level: 85,
    maxHP: 225102,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 184772,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 273115,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 42930,
      },
    },
  },
  253: {
    name: 'Fallen Pikeman',
    boss: true,
    level: 85,
    maxHP: 225995,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 185505,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 274198,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 43100,
      },
    },
  },
  254: {
    name: 'Wharf Rat',
    boss: true,
    level: 85,
    maxHP: 226887,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 186238,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 275282,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 43270,
      },
    },
  },
  255: {
    name: 'Island Crab',
    boss: false,
    level: 86,
    maxHP: 109750,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 75683,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 93212,
      },
    },
  },
  256: {
    name: 'Stumbling Funguar',
    boss: false,
    level: 86,
    maxHP: 110180,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 75980,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 93578,
      },
    },
  },
  257: {
    name: 'Magicked Bones',
    boss: false,
    level: 86,
    maxHP: 110610,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 76276,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 93943,
      },
    },
  },
  258: {
    name: 'Ladybug',
    boss: false,
    level: 87,
    maxHP: 112331,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 77463,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 95405,
      },
    },
  },
  259: {
    name: 'Apkallu',
    boss: false,
    level: 87,
    maxHP: 112766,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 77763,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 95775,
      },
    },
  },
  260: {
    name: 'Giant Crab',
    boss: false,
    level: 87,
    maxHP: 113201,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 78064,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 96145,
      },
    },
  },
  261: {
    name: 'Apkallu',
    boss: false,
    level: 88,
    maxHP: 114942,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 79264,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 97624,
      },
    },
  },
  262: {
    name: 'Kalong',
    boss: false,
    level: 88,
    maxHP: 115382,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 79568,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 97998,
      },
    },
  },
  263: {
    name: 'Bloodthirsty Wolf',
    boss: false,
    level: 88,
    maxHP: 115822,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 79871,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 98372,
      },
    },
  },
  264: {
    name: 'Devilet',
    boss: false,
    level: 89,
    maxHP: 117583,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 81086,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 99868,
      },
    },
  },
  265: {
    name: 'Antelope',
    boss: false,
    level: 89,
    maxHP: 118028,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 81393,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 100246,
      },
    },
  },
  266: {
    name: 'Megalocrab',
    boss: false,
    level: 89,
    maxHP: 118473,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 81700,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 100624,
      },
    },
  },
  267: {
    name: 'Kindling Sprite',
    boss: true,
    level: 90,
    maxHP: 252518,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 207283,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 306392,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 48155,
      },
      FIRE_SHARD: null,
      LIGHTNING_CRYSTAL: null,
      LUMINOUS_CRYSTAL: null,
      WIND_CRYSTAL: null,
    },
  },
  268: {
    name: 'Cockatrice',
    boss: true,
    level: 90,
    maxHP: 253463,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 208060,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 307540,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 48335,
      },
      ANIMAL_HIDE: null,
      DODO_EGG: null,
      DODO_FEATHER: null,
      DODO_TENDERLOIN: null,
    },
  },
  269: {
    name: 'Stumbling Funguar',
    boss: true,
    level: 90,
    maxHP: 254408,
    currentHP: null,
    drops: {
      exp: {
        name: 'Exp',
        image: 'src/assets/images/experience_icon.png',
        amount: 208836,
      },
      GIL: {
        name: 'Gil',
        image: 'src/assets/images/currency_gil.png',
        amount: 308687,
      },
      ALLAGAN_TOMESTONE: {
        name: 'Allagan Tomestone',
        image: 'src/assets/images/currency_tomestone_allagan.png',
        amount: 48515,
      },
    },
  },
};
