import React from 'react';
import { useStore } from '../../context/game-context';

import { JOBS } from '../../constants/jobs';

import './index.css';

// @ts-ignore
const JobEntry = ({ jobID, jobs }) => {
  // @ts-ignore
  const JOB_DATA: any = jobs[jobID];

  if (typeof JOB_DATA === 'undefined') {
    return <></>;
  }

  return (
    <div className='panel' style={{ minWidth: 200, width: '2em' }}>
      <div className='body'>
        <div className='header'>
          <div className='view'>
            <span
              className={JOB_DATA.className}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <i className={JOB_DATA.iconName}></i>
              <b style={{ fontSize: 18 }}>{JOB_DATA.name}</b>
            </span>
          </div>
        </div>

        <div className='divider'></div>

        <div className='bar'>
          <b>Level:</b> {JOB_DATA.level}
        </div>
      </div>
    </div>
  );
};

export const Jobs = () => {
  // @ts-ignore
  const { jobs } = useStore();

  return (
    <div className='job-container'>
      {Object.keys(JOBS).map((jobID) => (
        <JobEntry key={jobID} jobID={jobID} jobs={jobs} />
      ))}
    </div>
  );
};
