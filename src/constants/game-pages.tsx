interface Page {
  [pageIndex: number]: PageProps;
}

interface PageProps {
  id: number;
  name: string;
  link: string;
  unlocked: boolean;
}

export const GAME_PAGES: Page = {
  0: {
    id: 1,
    name: 'Battle',
    link: '/battle',
    unlocked: true,
  },
  1: {
    id: 2,
    name: 'Gather',
    link: '/gathering',
    unlocked: true,
  },
  2: {
    id: 3,
    name: 'Craft',
    link: '/crafting',
    unlocked: true,
  },
  3: {
    id: 4,
    name: 'Shop',
    link: '/shop',
    unlocked: true,
  },
  4: {
    id: 5,
    name: 'Inventory',
    link: '/inventory',
    unlocked: true,
  },
};
