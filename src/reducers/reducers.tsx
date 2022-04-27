import cloneDeep from 'lodash.clonedeep';

import { ACTIONS } from '../actions/actions';

import { JOBS } from '../constants/jobs';
import { ITEMS } from '../constants/items';
import { CURRENCIES } from '../constants/currencies';
import { LEVEL_EXP } from '../constants/level-exp';

import { CalcLevelFromExp } from '../utils/calc-level';

export const storeReducer = (store: any, action: any) => {
  // console.log('[Store Reducer] Store:', store, '|| Action:', action);

  const LEVEL_CAP_DATA =
    Object.values(LEVEL_EXP)[Object.keys(LEVEL_EXP).length - 1];
  let Game = cloneDeep(store.game);
  let Currencies = cloneDeep(store.currencies);
  let Items = cloneDeep(store.items);
  let Jobs = cloneDeep(store.jobs);
  let Stats = cloneDeep(store.stats);

  switch (action.type) {
    case ACTIONS.CHANGE_JOB:
      const { jobID } = action;

      Object.keys(Jobs).forEach((job) => {
        Jobs[job].active = false;
      });

      Jobs[jobID].active = true;

      return {
        ...store,
        jobs: {
          ...Jobs,
          [jobID]: Object.assign({}, Jobs[jobID]),
        },
      };

    case ACTIONS.CHANGE_PAGE:
      return {
        ...store,
        game: {
          ...Game,
          activePage: action.pageID,
        },
      };

    case ACTIONS.PROCESS_GATHER_REWARD:
      const GATHERABLE_ITEM = action.item;
      const ITEM_INDEX = Object.keys(ITEMS).filter(
        (item) => ITEMS[item].name === GATHERABLE_ITEM.name
      )[0];
      const ACTIVE_JOB: any = Object.keys(Jobs).filter(
        (job: any) => Jobs[job].active === true
      );

      let dropAmount: number = 1;
      if (
        typeof GATHERABLE_ITEM.maxAmount !== 'undefined' &&
        GATHERABLE_ITEM.minAmount !== GATHERABLE_ITEM.maxAmount
      ) {
        dropAmount = Math.floor(Math.random() * GATHERABLE_ITEM.maxAmount);
      } else {
        dropAmount = GATHERABLE_ITEM.minAmount ?? 1;
      }

      if (typeof Items[ITEM_INDEX] === 'undefined') {
        Items[ITEM_INDEX] = {
          amount: dropAmount,
        };
      } else {
        Items[ITEM_INDEX].amount += dropAmount;
      }

      const EXP_BONUS =
        GATHERABLE_ITEM.currentQuality > 10
          ? GATHERABLE_ITEM.currentQuality / 10
          : 1;
      const EXP_YIELD = Jobs[ACTIVE_JOB].level * dropAmount * 100 * EXP_BONUS;

      if (Jobs[ACTIVE_JOB].exp < LEVEL_CAP_DATA.totalAccumulatedExp) {
        if (
          Jobs[ACTIVE_JOB.exp] + EXP_YIELD >
          LEVEL_CAP_DATA.totalAccumulatedExp
        ) {
          Jobs[ACTIVE_JOB].exp = LEVEL_CAP_DATA.totalAccumulatedExp;
        } else {
          Jobs[ACTIVE_JOB].exp += EXP_YIELD;
        }

        Jobs[ACTIVE_JOB].level = CalcLevelFromExp(Jobs[ACTIVE_JOB].exp).LEVEL;
      }

      Stats.expEarned.amount += EXP_YIELD;
      Stats.itemsGathered.amount += dropAmount;

      return {
        ...store,
        items: Items,
        stats: Stats,
        jobs: Jobs,
      };

    case ACTIONS.SET_ACTIVE_ENEMY:
      let ENEMY_DATA = action.enemy;
      ENEMY_DATA.currentHP -= action.damageDealt;

      return {
        ...store,
        activeEnemy: Object.assign({}, ENEMY_DATA),
      };

    case ACTIONS.SET_ACTIVE_GATHER:
      const GATHERING_ITEM = action.item;
      GATHERING_ITEM.currentDurability -= action.durabilityLost;
      GATHERING_ITEM.currentQuality += action.qualityGain;

      return {
        ...store,
        activeGather: Object.assign({}, GATHERING_ITEM),
      };

    case ACTIONS.SET_PLAYER_REWARDS:
      const { drops } = action.enemy;

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
          const DROP_CHANCE = ITEM_DROP.dropChance ?? 20;

          let dropAmount: number = 0;
          if (Math.floor(Math.random() * 100) < DROP_CHANCE) {
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
