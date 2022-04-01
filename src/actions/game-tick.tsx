// @ts-ignore
export const gameTick = ({ store, dispatch }, delta: number) => {
  delta = Math.round(delta * 10) / 10;

  const PENDING_EFFECTS: [] = [];

  const ACTIVE_PAGE: number = store.game.activePage;
  const ACTIVE_JOB_ID = Object.keys(store.jobs).filter(
    (job: any) => store.jobs[job].active
  );
  // @ts-ignore
  const ACTIVE_JOB_DATA = store.jobs[ACTIVE_JOB_ID];

  if (typeof ACTIVE_JOB_DATA === 'undefined') return;

  switch (ACTIVE_PAGE) {
    /**
     * Battle
     */
    case 1:
      if (
        ACTIVE_JOB_DATA.type !== 'DPS' &&
        ACTIVE_JOB_DATA.type !== 'Tank' &&
        ACTIVE_JOB_DATA.type !== 'Healer'
      )
        return;
      console.log('[Game Tick] Processing Battle Page Data.');

      break;

    /**
     * Gathering
     */
    case 2:
      if (ACTIVE_JOB_DATA.type !== 'Gatherer') return;
      console.log('[Game Tick] Processing Gather Page Data.');

      break;

    /**
     * Crafting
     */
    case 3:
      if (ACTIVE_JOB_DATA.type !== 'Crafter') return;
      console.log('[Game Tick] Processing Crafting Page Data.');

      break;
  }
};
