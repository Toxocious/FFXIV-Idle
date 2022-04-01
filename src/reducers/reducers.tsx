import cloneDeep from 'lodash.clonedeep';

import { ACTIONS } from '../actions/actions';
import { JOBS } from '../constants/jobs';

export const storeReducer = (store: any, action: any) => {
  console.log('[Store Reducer] Store:', store, '|| Action:', action);

  switch (action.type) {
    case ACTIONS.CHANGE_JOB:
      const { jobID } = action;

      const JOB_LIST = cloneDeep(store.jobs);

      /**
       * Set all jobs to inactive, as only one job may be active at a time.
       */
      Object.keys(JOB_LIST).forEach(
        // @ts-ignore
        (job: any) => (JOBS[job].active = false)
      );

      JOB_LIST[jobID].active = true;

      return {
        ...store,
        jobs: {
          ...JOB_LIST,
          [jobID]: Object.assign({}, JOB_LIST[jobID]),
        },
      };
      break;

    case ACTIONS.CHANGE_PAGE:
      console.log('Changing active page.', action);
      const GAME_STORE = cloneDeep(store.game);

      return {
        ...store,
        game: {
          ...GAME_STORE,
          activePage: action.pageID,
        },
      };
      break;

    default:
      console.warn('Unknown action dispatched.');
      break;
  }
};
