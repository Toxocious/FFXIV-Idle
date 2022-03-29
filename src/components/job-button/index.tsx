import { useDispatch, useStore } from '../../context/game-context';
import { ChangeActiveJob } from '../../actions/actions';

// @ts-ignore
export const JobButton = ({ jobID }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(ChangeActiveJob(jobID))}>Select</button>
  );
};
