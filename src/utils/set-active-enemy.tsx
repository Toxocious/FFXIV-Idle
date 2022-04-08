import { GetRandomEnemy } from './get-random-enemy';

export const SetEnemy = (level: number) => {
  const RANDOM_ENEMY = GetRandomEnemy(level);

  RANDOM_ENEMY.currentHP = RANDOM_ENEMY.maxHP;

  return RANDOM_ENEMY;
};
