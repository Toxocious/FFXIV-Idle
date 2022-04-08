import { useStore } from '../providers/game';
import { ENEMIES } from '../constants/enemies';

export const GetRandomEnemy = (level: number) => {
  const POSSIBLE_ENEMIES: string[] = Object.keys(ENEMIES).filter(
    (enemy: any) =>
      ENEMIES[enemy].level > level - 2 && ENEMIES[enemy].level < level + 2
  );

  const RANDOM_ENEMY = Math.floor(Math.random() * POSSIBLE_ENEMIES.length);

  return ENEMIES[RANDOM_ENEMY];
};
