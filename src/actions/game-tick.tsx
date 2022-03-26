import { JOBS } from '../constants/jobs';

// @ts-ignore
export const gameTick = ({ store, dispatch }, delta: number) => {
  delta = Math.round(delta * 10) / 10;

  const pendingEffects: [] = [];

  /**
   * Process things that need to happen every tick.
   *  - Automated battling
   *  - Harvesting
   *  - Crafting?
   *    - Will this be automatic?
   */
};
