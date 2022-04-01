export const ACTIONS = {
  CHANGE_JOB: 'ChangeActiveJob',
  CHANGE_PAGE: 'ChangeActivePage',
};

export const ChangeActiveJob = (jobID: any) => ({
  type: ACTIONS.CHANGE_JOB,
  jobID,
});

export const ChangeActivePage = (pageID: any) => ({
  type: ACTIONS.CHANGE_PAGE,
  pageID,
});
