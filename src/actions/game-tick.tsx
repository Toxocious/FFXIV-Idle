import { SetEnemy } from '../utils/set-active-enemy';
import { SetActiveEnemy, SetPlayerRewards } from '../actions/actions';

// @ts-ignore
export const gameTick = ({ store, dispatch }, delta: number) => {
  delta = Math.round(delta * 10) / 10;

  const PENDING_EFFECTS: [] = [];

  const ACTIVE_PAGE: number = store.game.activePage;
  const ACTIVE_JOB_ID: string[] = Object.keys(store.jobs).filter(
    (job: any) => store.jobs[job].active
  );
  // @ts-ignore
  const ACTIVE_JOB_DATA: any = store.jobs[ACTIVE_JOB_ID];

  if (typeof ACTIVE_JOB_DATA === 'undefined') {
    return;
  }

  switch (ACTIVE_PAGE) {
    /**
     * Battle
     */
    case 1:
      if (!['DPS', 'Tank', 'Healer'].includes(ACTIVE_JOB_DATA.type)) {
        return;
      }

      let { activeEnemy } = store;

      if (Object.keys(activeEnemy).length === 0) {
        return dispatch(SetActiveEnemy(SetEnemy(ACTIVE_JOB_DATA.level)));
      }

      if (activeEnemy.currentHP > 0) {
        let randomMult =
          Math.floor(Math.random() * (ACTIVE_JOB_DATA.level * 0.4)) + 1;
        let damageRoll = Math.floor(ACTIVE_JOB_DATA.level * 5 * randomMult);

        if (damageRoll > activeEnemy.currentHP) {
          damageRoll = activeEnemy.currentHP;
        }

        dispatch(SetActiveEnemy(activeEnemy, damageRoll));
      } else {
        dispatch(SetPlayerRewards(activeEnemy));
        dispatch(SetActiveEnemy(SetEnemy(ACTIVE_JOB_DATA.level)));
      }

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
