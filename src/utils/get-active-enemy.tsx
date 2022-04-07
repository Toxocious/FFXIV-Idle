import { useStore } from '../providers/game';

export const GetActiveEnemy = () => {
  const { activeEnemy } = useStore();

  return activeEnemy;
};
