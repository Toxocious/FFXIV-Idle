interface Currency {
  [currencyID: string]: CurrencyProps;
}

interface CurrencyProps {
  name: string;
  value: number;
  imageName: string;
  unlocked: boolean;
}

export const CURRENCIES: Currency = {
  GIL: {
    name: 'Gil',
    value: 0,
    imageName: 'src/assets/images/currency_gil.png',
    unlocked: true,
  },
  MGP: {
    name: 'Minigame Points',
    value: 0,
    imageName: 'src/assets/images/currency_mgp.png',
    unlocked: false,
  },

  SERPENT_SEALS: {
    name: 'Serpent Seals',
    value: 0,
    imageName: 'src/assets/images/currency_serpent_seals.png',
    unlocked: false,
  },
  VENTURES: {
    name: 'Ventures',
    value: 0,
    imageName: 'src/assets/images/currency_ventures.png',
    unlocked: false,
  },

  ALLAGAN_TOMESTONE: {
    name: 'Allagan Tomestone of Poetics',
    value: 0,
    imageName: 'src/assets/images/currency_tomestone_allagan.png',
    unlocked: true,
  },

  SKYBUILDER_SCRIPS: {
    name: "Skybuilders' Scrip",
    value: 0,
    imageName: 'src/assets/images/currency_skybuilder_scrip.png',
    unlocked: false,
  },

  CRAFTER_SCRIP_YELLOW: {
    name: "Yellow Crafter's Scrip",
    value: 0,
    imageName: 'src/assets/images/currency_crafter_scrip_yellow.png',
    unlocked: false,
  },
  CRAFTER_SCRIP_WHITE: {
    name: "White Crafter's Scrip",
    value: 0,
    imageName: 'src/assets/images/currency_crafter_scrip_white.png',
    unlocked: false,
  },

  GATHERER_SCRIP_YELLOW: {
    name: "Yellow Gatherer's Scrip",
    value: 0,
    imageName: 'src/assets/images/currency_gatherer_scrip_yellow.png',
    unlocked: false,
  },
  GATHERER_SCRIP_WHITE: {
    name: "White Gatherer's Scrip",
    value: 0,
    imageName: 'src/assets/images/currency_gatherer_scrip_white.png',
    unlocked: false,
  },
};
