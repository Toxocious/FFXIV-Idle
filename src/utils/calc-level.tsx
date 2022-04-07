import { LEVEL_EXP } from '../constants/level-exp';

export const CalcLevelFromExp = (exp: number = 0) => {
  const LEVEL: any = Object.keys(LEVEL_EXP).filter(
    (level: any) => LEVEL_EXP[level].totalAccumulatedExp < exp
  );

  const CURRENT_LEVEL = parseInt(LEVEL.slice(-1));
  const CURRENT_LEVEL_EXP_DATA: any = LEVEL_EXP[CURRENT_LEVEL];
  const NEXT_LEVEL_EXP_DATA: any = LEVEL_EXP[CURRENT_LEVEL + 1];

  return {
    LEVEL: CURRENT_LEVEL,
    EARNED_LEVEL_EXP: NEXT_LEVEL_EXP_DATA.totalAccumulatedExp - exp,
    TOTAL_LEVEL_EXP:
      NEXT_LEVEL_EXP_DATA.totalAccumulatedExp -
      CURRENT_LEVEL_EXP_DATA.totalAccumulatedExp,
  };
};
