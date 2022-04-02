import { GetRandomEnemy } from './get-random-enemy';

export const SetEnemy = () => {
  const RANDOM_ENEMY = GetRandomEnemy();

  return RANDOM_ENEMY;
};
