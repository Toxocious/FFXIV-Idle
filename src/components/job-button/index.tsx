import React from 'react';

import { useDispatch } from '../../providers/game';
import { ChangeActiveJob } from '../../actions/actions';

import { Button } from '../button';

interface Props {
  jobID: number;
}

export const JobButton = (props: Props) => {
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
