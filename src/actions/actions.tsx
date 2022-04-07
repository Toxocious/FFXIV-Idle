export const ACTIONS = {
  CHANGE_JOB: 'ChangeActiveJob',
  CHANGE_PAGE: 'ChangeActivePage',
  SET_ACTIVE_ENEMY: 'SetActiveEnemy',
  SET_PLAYER_REWARDS: 'SetPlayerRewards',
};

export const ChangeActiveJob = (jobID: any) => ({
  type: ACTIONS.CHANGE_JOB,
  jobID,
});

export const ChangeActivePage = (pageID: any) => ({
  type: ACTIONS.CHANGE_PAGE,
  pageID,
});

export const SetActiveEnemy = (enemy: any, damageDealt: number = 0) => ({
  type: ACTIONS.SET_ACTIVE_ENEMY,
  enemy,
  damageDealt,
});

export const SetPlayerRewards = (enemy: any) => ({
  type: ACTIONS.SET_PLAYER_REWARDS,
  enemy,
});
