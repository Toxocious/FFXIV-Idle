import { useDispatch, useStore } from '../../context/game-context';
import { ChangeActiveJob } from '../../actions/actions';

interface Props {
  jobID: number;
}

export const JobButton = (props: Props) => {
  const dispatch = useDispatch();

  const { jobID } = props;

  return (
    <button onClick={() => dispatch(ChangeActiveJob(jobID))}>Select</button>
  );
};
