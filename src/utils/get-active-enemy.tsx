import { useStore } from '../context/game-context';

export const GetActiveEnemy = () => {
  const { activeEnemy } = useStore();

  return activeEnemy;
};
