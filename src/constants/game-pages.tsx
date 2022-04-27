import { PageInterface } from '../types/page';

export const GAME_PAGES: PageInterface = {
  0: {
    id: 1,
    name: 'Battle',
    link: '/battle',
    unlocked: true,
    display: false,
  },
  1: {
    id: 2,
    name: 'Gather',
    link: '/gathering',
    unlocked: true,
    display: false,
  },
  2: {
    id: 3,
    name: 'Craft',
    link: '/crafting',
    unlocked: true,
    display: false,
  },
  3: {
    id: 4,
    name: 'Shop',
    link: '/shop',
    unlocked: true,
    display: true,
  },
  4: {
    id: 5,
    name: 'Inventory',
    link: '/inventory',
    unlocked: true,
    display: true,
  },
  5: {
    id: 6,
    name: 'Job Selector',
    link: '/job-selector',
    unlocked: false,
    display: true,
  },
};
