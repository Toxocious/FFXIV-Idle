import { useStore } from '../context/game-context';

export const GetActiveJob = () => {
  // @ts-ignore
  const { jobs } = useStore();

  const ActiveJob = Object.keys(jobs).filter(
    // @ts-ignore
    (job: any) => jobs[job].active === true
  );

  // @ts-ignore
  return jobs[ActiveJob];
};
