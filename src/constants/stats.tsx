import { StatsInterface } from '../types/stats';

export const STATS: StatsInterface = {
  mobKills: {
    name: 'Mob Kills',
    amount: 0,
  },
  expEarned: {
    name: 'Exp. Earned',
    amount: 0,
    type: 'Currency',
    index: 'exp',
  },
  gilEarned: {
    name: 'Gil Earned',
    amount: 0,
    type: 'Currency',
    index: 'GIL',
  },
  tomestonesEarned: {
    name: 'Tomestones Earned',
    amount: 0,
    type: 'Currency',
    index: 'ALLAGAN_TOMESTONES',
  },
  mobDropsCollected: {
    name: 'Mob Drops Collected',
    amount: 0,
  },
  itemsCrafted: {
    name: 'Items Crafted',
    amount: 0,
  },
  itemsFound: {
    name: 'Items Found',
    amount: 0,
  },
  itemsGathered: {
    name: 'Items Gathered',
    amount: 0,
  },
};
