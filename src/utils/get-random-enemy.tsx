import { ENEMIES } from '../constants/enemies';

export const GetRandomEnemy = () => {
  const ENEMY_COUNT = Object.keys(ENEMIES).length;
  const ENEMY_INDEX = Math.floor(Math.random() * ENEMY_COUNT);

  // @ts-ignore
  return ENEMIES[ENEMY_INDEX];
};
