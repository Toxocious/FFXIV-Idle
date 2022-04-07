import { LEVEL_EXP } from '../constants/level-exp';

export const CalcLevelFromExp = (exp: number = 0) => {
  const LEVELS = Object.keys(LEVEL_EXP).filter(
    (level: any) => LEVEL_EXP[level].totalAccumulatedExp < exp
  );

  return LEVELS.slice(-1);
};
