import { useStore } from '../../providers/game';
import { JOBS } from '../../constants/jobs';
import { JobButton } from '../job-button';

import './index.css';

interface Props {
  jobID?: any;
  jobs?: any;
  showLevel?: boolean;
  clickToSwitch?: boolean;
}

const JobEntry = (props: Props) => {
  const { jobID, jobs, showLevel, clickToSwitch } = props;
  const JOB_DATA: any = jobs[jobID];

  if (typeof JOB_DATA === 'undefined') {
    return <></>;
  }

  return (
    <div className='panel' style={{ minWidth: 210, width: '2em' }}>
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

        {!showLevel ? (
          ''
        ) : (
          <>
            <div className='divider'></div>
            <div className='bar'>
              <b>Level:</b> {JOB_DATA.level}
            </div>
          </>
        )}

        {!clickToSwitch ? (
          ''
        ) : (
          <>
            <div className='divider'></div>
            <div className='bar'>
              <JobButton jobID={jobID} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const Jobs = (props: Props) => {
  const { jobs } = useStore();

  return (
    <div className='job-container'>
      {Object.keys(JOBS).map((jobID) => (
        <JobEntry
          key={jobID}
          jobID={jobID}
          jobs={jobs}
          showLevel={props.showLevel ?? false}
          clickToSwitch={props.clickToSwitch ?? false}
        />
      ))}
    </div>
  );
};
