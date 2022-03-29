export const ACTIONS = {
  CHANGE_JOB: 'ChangeActiveJob',
};

export const ChangeActiveJob = (jobID: any) => ({
  type: ACTIONS.CHANGE_JOB,
  jobID,
});
