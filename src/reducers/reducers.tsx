import cloneDeep from 'lodash.clonedeep';

import { ACTIONS } from '../actions/actions';

import { JOBS } from '../constants/jobs';
import { ITEMS } from '../constants/items';
import { STATS } from '../constants/stats';
import { CURRENCIES } from '../constants/currencies';
import { LEVEL_EXP } from '../constants/level-exp';

import { CalcLevelFromExp } from '../utils/calc-level';

export const storeReducer = (store: any, action: any) => {
  // console.log('[Store Reducer] Store:', store, '|| Action:', action);

  switch (action.type) {
    case ACTIONS.CHANGE_JOB:
      const { jobID } = action;

      const JOB_LIST = cloneDeep(store.jobs);

      Object.keys(JOB_LIST).forEach((job) => {
        JOB_LIST[job].active = false;
      });

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

    case ACTIONS.SET_PLAYER_REWARDS:
      const { drops } = action.enemy;

      const LEVEL_CAP_DATA =
        Object.values(LEVEL_EXP)[Object.keys(LEVEL_EXP).length - 1];

      let Currencies = cloneDeep(store.currencies);
      let Items = cloneDeep(store.items);
      let Jobs = cloneDeep(store.jobs);
      let Stats = cloneDeep(store.stats);

      Stats.mobKills.amount++;

      Object.keys(drops).map((dropID) => {
        if (dropID === 'exp') {
          const ACTIVE_JOB: any = Object.keys(Jobs).filter(
            (job: any) => Jobs[job].active === true
          );

          if (Jobs[ACTIVE_JOB].exp < LEVEL_CAP_DATA.totalAccumulatedExp) {
            if (
              JOBS[ACTIVE_JOB.exp] + drops[dropID].amount >
              LEVEL_CAP_DATA.totalAccumulatedExp
            ) {
              Jobs[ACTIVE_JOB].exp = LEVEL_CAP_DATA.totalAccumulatedExp;
            } else {
              Jobs[ACTIVE_JOB].exp += drops[dropID].amount;
            }

            Jobs[ACTIVE_JOB].level = CalcLevelFromExp(
              Jobs[ACTIVE_JOB].exp
            ).LEVEL;
          }

          Stats.expEarned.amount += drops[dropID].amount;
        } else if (dropID in CURRENCIES) {
          Currencies[dropID].amount += drops[dropID].amount;

          Object.keys(Stats).forEach((index) => {
            if (Stats[index].index == dropID) {
              Stats[index].amount += drops[dropID].amount;
            }
          });
        } else if (dropID in ITEMS) {
          const ITEM_DROP = ITEMS[dropID];

          let dropAmount: number = 0;
          if (
            typeof ITEM_DROP.maxAmount !== 'undefined' &&
            ITEM_DROP.minAmount !== ITEM_DROP.maxAmount
          ) {
            dropAmount = Math.floor(Math.random() * ITEM_DROP.maxAmount);
          } else {
            dropAmount = ITEM_DROP.minAmount ?? 1;
          }

          if (typeof Items[dropID] === 'undefined') {
            Items[dropID] = {
              amount: dropAmount,
            };
          } else {
            Items[dropID].amount += dropAmount;
          }

          Stats.itemsFound.amount += dropAmount;
        }
      });

      return {
        ...store,
        currencies: Currencies,
        jobs: Jobs,
        items: Items,
        stats: Stats,
      };

    default:
      console.warn('Unknown action dispatched.', action);
      break;
  }

  return store;
};
