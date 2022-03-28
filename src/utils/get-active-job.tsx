import { useStore } from '../context/game-context';
import { JOBS } from '../constants/jobs';

export const GetActiveJob = () => {
  // @ts-ignore
  const { jobs } = useStore();

  const ActiveJob = Object.keys(jobs).filter(
    // @ts-ignore
    (job: any) => JOBS[job].active === true
  );

  // @ts-ignore
  return JOBS[ActiveJob];
};
