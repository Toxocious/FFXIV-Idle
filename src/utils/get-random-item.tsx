import { ITEMS } from '../constants/items';

export const GetRandomItem = (gatherable: boolean) => {
  const POSSIBLE_ITEMS: string[] = Object.keys(ITEMS).filter(
    (index: any) => ITEMS[index].gatherable === gatherable
  );

  const RANDOM_ITEM: any = Math.floor(Math.random() * POSSIBLE_ITEMS.length);

  return ITEMS[POSSIBLE_ITEMS[RANDOM_ITEM]];
};
