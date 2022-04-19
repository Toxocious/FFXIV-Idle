import { GetRandomItem } from './get-random-item';

export const SetGatherableItem = () => {
  const RANDOM_ITEM = GetRandomItem(true);

  return RANDOM_ITEM;
};
