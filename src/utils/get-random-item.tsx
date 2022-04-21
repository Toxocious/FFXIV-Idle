import { ITEMS } from '../constants/items';

export const GetRandomItem = (gatherable: boolean = false) => {
  const POSSIBLE_ITEMS: string[] = Object.keys(ITEMS).filter(
    (index: string) => ITEMS[index].gatherable === gatherable
  );

  const RANDOM_ITEM: number = Math.floor(Math.random() * POSSIBLE_ITEMS.length);

  return ITEMS[POSSIBLE_ITEMS[RANDOM_ITEM]];
};
