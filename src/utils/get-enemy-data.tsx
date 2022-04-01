import { ENEMIES } from '../constants/enemies';

export const GetEnemyData = (enemyID: number) => {
  // @ts-ignore
  return ENEMIES[enemyID];
};
