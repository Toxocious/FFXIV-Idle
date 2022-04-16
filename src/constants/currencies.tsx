import { CurrencyInterface } from '../types/currency';

export const CURRENCIES: CurrencyInterface = {
  GIL: {
    name: 'Gil',
    amount: 0,
    image: 'src/assets/images/currency_gil.png',
    unlocked: true,
  },
  MGP: {
    name: 'Minigame Points',
    amount: 0,
    image: 'src/assets/images/currency_mgp.png',
    unlocked: false,
  },

  SERPENT_SEALS: {
    name: 'Serpent Seals',
    amount: 0,
    image: 'src/assets/images/currency_serpent_seals.png',
    unlocked: false,
  },
  VENTURES: {
    name: 'Ventures',
    amount: 0,
    image: 'src/assets/images/currency_ventures.png',
    unlocked: false,
  },

  ALLAGAN_TOMESTONE: {
    name: 'Allagan Tomestone of Poetics',
    amount: 0,
    image: 'src/assets/images/currency_tomestone_allagan.png',
    unlocked: true,
  },

  SKYBUILDER_SCRIPS: {
    name: "Skybuilders' Scrip",
    amount: 0,
    image: 'src/assets/images/currency_skybuilder_scrip.png',
    unlocked: false,
  },

  CRAFTER_SCRIP_YELLOW: {
    name: "Yellow Crafter's Scrip",
    amount: 0,
    image: 'src/assets/images/currency_crafter_scrip_yellow.png',
    unlocked: false,
  },
  CRAFTER_SCRIP_WHITE: {
    name: "White Crafter's Scrip",
    amount: 0,
    image: 'src/assets/images/currency_crafter_scrip_white.png',
    unlocked: false,
  },

  GATHERER_SCRIP_YELLOW: {
    name: "Yellow Gatherer's Scrip",
    amount: 0,
    image: 'src/assets/images/currency_gatherer_scrip_yellow.png',
    unlocked: false,
  },
  GATHERER_SCRIP_WHITE: {
    name: "White Gatherer's Scrip",
    amount: 0,
    image: 'src/assets/images/currency_gatherer_scrip_white.png',
    unlocked: false,
  },
};
