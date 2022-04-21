import { EnemyInterface } from '../types/enemy';
import { ItemInterface, ItemProps } from '../types/item';

export const ACTIONS = {
  CHANGE_JOB: 'ChangeActiveJob',
  CHANGE_PAGE: 'ChangeActivePage',
  PROCESS_GATHER_REWARD: 'ProcessGatherReward',
  SET_ACTIVE_ENEMY: 'SetActiveEnemy',
  SET_ACTIVE_GATHER: 'SetActiveGather',
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

export const ProcessGatherReward = (item: ItemInterface) => ({
  type: ACTIONS.PROCESS_GATHER_REWARD,
  item,
});

export const SetActiveEnemy = (
  enemy: EnemyInterface,
  damageDealt: number = 0
) => ({
  type: ACTIONS.SET_ACTIVE_ENEMY,
  enemy,
  damageDealt,
});

export const SetActiveGather = (
  item: ItemProps,
  durabilityLost: number = 0
) => ({
  type: ACTIONS.SET_ACTIVE_GATHER,
  item,
  durabilityLost,
});

export const SetPlayerRewards = (enemy: EnemyInterface) => ({
  type: ACTIONS.SET_PLAYER_REWARDS,
  enemy,
});
