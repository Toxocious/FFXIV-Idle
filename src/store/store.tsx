import { JOBS } from '../constants/jobs';
import { CURRENCIES } from '../constants/currencies';
import { schema } from '../store/schema';

const STORE_KEY: string = 'ffxiv_incremental_beta_v_0_1';

export const getInitialStore = () => {
  console.log('Getting intial data store');

  const SAVE_DATA: any = localStorage.getItem(STORE_KEY);

  if (SAVE_DATA !== null) {
    console.log('Save data found:', JSON.parse(SAVE_DATA));
    return JSON.parse(SAVE_DATA);
  }

  const STORE: any = Object.assign({}, schema.store);

  Object.keys(JOBS).forEach((JobID) => {
    // @ts-ignore
    const JOB_DATA: any = JOBS[JobID];

    if (JOB_DATA.unlocked) {
      STORE.jobs[JobID] = Object.assign({}, JOB_DATA);
    }
  });

  Object.keys(CURRENCIES).forEach((currencyID) => {
    // @ts-ignore
    const CURRENCY_DATA: any = CURRENCIES[currencyID];

    if (CURRENCY_DATA.unlocked) {
      STORE.currencies[currencyID] = Object.assign({}, CURRENCY_DATA);
    }
  });

  saveStore(STORE);
  console.log('New save generated:', STORE);
  return STORE;
};

export const saveStore = (store: any) => {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
};
