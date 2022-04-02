export const ACTIONS = {
  CHANGE_JOB: 'ChangeActiveJob',
  CHANGE_PAGE: 'ChangeActivePage',
  SET_ACTIVE_ENEMY: 'SetActiveEnemy',
};

export const ChangeActiveJob = (jobID: any) => ({
  type: ACTIONS.CHANGE_JOB,
  jobID,
});

export const ChangeActivePage = (pageID: any) => ({
  type: ACTIONS.CHANGE_PAGE,
  pageID,
});

export const SetActiveEnemy = (enemy: any) => ({
  type: ACTIONS.SET_ACTIVE_ENEMY,
  enemy,
});
