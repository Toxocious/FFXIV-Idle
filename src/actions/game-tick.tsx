import { useStore } from '../context/game-context';
import { GetActiveJob } from '../utils/get-active-job';

// @ts-ignore
export const gameTick = ({ store, dispatch }, delta: number) => {
  delta = Math.round(delta * 10) / 10;

  const pendingEffects: [] = [];

  const activePage: number = store.game.activePage;
  console.log('[Game Tick] Active Page:', activePage);
  switch (activePage) {
    /**
     * Battle
     */
    case 1:
      console.log('[Game Tick] Processing Battle Page Data.');

      break;

    /**
     * Gathering
     */
    case 2:
      console.log('[Game Tick] Processing Gather Page Data.');

      break;

    /**
     * Crafting
     */
    case 3:
      console.log('[Game Tick] Processing Crafting Page Data.');

      break;
  }

  /**
   * Process things that need to happen every tick.
   *  - Automated battling
   *  - Harvesting
   *  - Crafting?
   *    - Will this be automatic?
   */
};
