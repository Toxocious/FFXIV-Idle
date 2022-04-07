import { useDispatch, useStore } from '../../providers/game';
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
