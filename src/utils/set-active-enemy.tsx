import { GetRandomEnemy } from './get-random-enemy';

export const SetEnemy = () => {
  const RANDOM_ENEMY = GetRandomEnemy();

  RANDOM_ENEMY.currentHP = RANDOM_ENEMY.maxHP;

  return RANDOM_ENEMY;
};
