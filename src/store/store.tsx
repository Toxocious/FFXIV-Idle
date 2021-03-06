import { JOBS } from '../constants/jobs';
import { CURRENCIES } from '../constants/currencies';
import { STATS } from '../constants/stats';

import { schema } from '../store/schema';

import { JobProps } from '../types/job';
import { CurrencyProps } from '../types/currency';
import { StatsProps } from '../types/stats';
import { SchemaProps } from '../types/schema';

const STORE_KEY: string = 'ffxiv_idle_beta_v_0_1';

export const getInitialStore = () => {
  const SAVE_DATA: string | null = localStorage.getItem(STORE_KEY);

  if (SAVE_DATA !== null) {
    return JSON.parse(SAVE_DATA);
  }

  const STORE: SchemaProps = Object.assign({}, schema.store);

  Object.keys(JOBS).forEach((JobID) => {
    const JOB_DATA: JobProps = JOBS[JobID];

    if (JOB_DATA.unlocked) {
      STORE.jobs[JobID] = Object.assign({}, JOB_DATA);
    }
  });

  Object.keys(CURRENCIES).forEach((currencyID) => {
    const CURRENCY_DATA: CurrencyProps = CURRENCIES[currencyID];

    if (CURRENCY_DATA.unlocked) {
      STORE.currencies[currencyID] = Object.assign({}, CURRENCY_DATA);
    }
  });

  Object.keys(STATS).forEach((statIndex) => {
    const STAT_DATA: StatsProps = STATS[statIndex];

    STORE.stats[statIndex] = Object.assign({}, STAT_DATA);
  });

  return STORE;
};

export const saveStore = (store: any) => {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
};
