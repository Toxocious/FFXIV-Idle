import cloneDeep from 'lodash.clonedeep';

import { ACTIONS } from '../actions/actions';
import { JOBS } from '../constants/jobs';

export const storeReducer = (store: any, action: any) => {
  // console.log('[Store Reducer] Store:', store, '|| Action:', action);

  switch (action.type) {
    case ACTIONS.CHANGE_JOB:
      const { jobID } = action;

      const JOB_LIST = cloneDeep(store.jobs);

      Object.keys(JOB_LIST).forEach((job) => (JOBS[job].active = false));

      JOB_LIST[jobID].active = true;

      return {
        ...store,
        jobs: {
          ...JOB_LIST,
          [jobID]: Object.assign({}, JOB_LIST[jobID]),
        },
      };

    case ACTIONS.CHANGE_PAGE:
      const GAME_STORE = cloneDeep(store.game);

      return {
        ...store,
        game: {
          ...GAME_STORE,
          activePage: action.pageID,
        },
      };

    case ACTIONS.SET_ACTIVE_ENEMY:
      let ENEMY_DATA = action.enemy;
      ENEMY_DATA.currentHP -= action.damageDealt;

      return {
        ...store,
        activeEnemy: Object.assign({}, ENEMY_DATA),
      };

    default:
      console.warn('Unknown action dispatched.', action);
      break;
  }

  return store;
};
