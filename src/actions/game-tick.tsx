import { useStore } from '../context/game-context';
import { GetActiveJob } from '../utils/get-active-job';

// @ts-ignore
export const gameTick = ({ store, dispatch }, delta: number) => {
  delta = Math.round(delta * 10) / 10;

  const PENDING_EFFECTS: [] = [];

  const ACTIVE_PAGE: number = store.game.activePage;
  const ACTIVE_JOB = Object.keys(store.jobs).filter(
    (job: any) => store.jobs[job].active
  );

  if (ACTIVE_JOB.length === 1) {
    switch (ACTIVE_PAGE) {
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
  }
};
