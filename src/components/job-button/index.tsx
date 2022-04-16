import { useDispatch } from '../../providers/game';
import { ChangeActiveJob } from '../../actions/actions';

import { JobButtonInterface } from '../../types/job-button';

import { Button } from '../button';

export const JobButton = (props: JobButtonInterface) => {
  const dispatch = useDispatch();

  const { jobID } = props;

  return (
    <Button
      text='Select Job'
      onClick={() => dispatch(ChangeActiveJob(jobID))}
      className='regal'
    />
  );
};
