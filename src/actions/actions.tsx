import { EnemyInterface } from '../types/enemy';

export const ACTIONS = {
  CHANGE_JOB: 'ChangeActiveJob',
  CHANGE_PAGE: 'ChangeActivePage',
  SET_ACTIVE_ENEMY: 'SetActiveEnemy',
  SET_PLAYER_REWARDS: 'SetPlayerRewards',
};

export const ChangeActiveJob = (jobID: string) => ({
  type: ACTIONS.CHANGE_JOB,
  jobID,
});

export const ChangeActivePage = (pageID: number) => ({
  type: ACTIONS.CHANGE_PAGE,
  pageID,
});

export const SetActiveEnemy = (
  enemy: EnemyInterface,
  damageDealt: number = 0
) => ({
  type: ACTIONS.SET_ACTIVE_ENEMY,
  enemy,
  damageDealt,
});

export const SetPlayerRewards = (enemy: EnemyInterface) => ({
  type: ACTIONS.SET_PLAYER_REWARDS,
  enemy,
});
