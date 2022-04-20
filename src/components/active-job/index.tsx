import { Link } from 'react-router-dom';

import { useDispatch } from '../../providers/game';
import { ChangeActivePage } from '../../actions/actions';

import { JobProps } from '../../types/job';

import { CalcLevelFromExp } from '../../utils/calc-level';
import { GetActiveJob } from '../../utils/get-active-job';

import './active-job.css';

export const ActiveJob = () => {
  const dispatch = useDispatch();
  const JOB_DATA: JobProps = GetActiveJob();

  if (typeof JOB_DATA === 'undefined') {
    return <></>;
  }

  const JOB_LEVEL_DATA: any = CalcLevelFromExp(JOB_DATA.exp);

  return (
    <div className='active-job'>
      <div className='panel' style={{ minWidth: 218, width: '2em' }}>
        <div className='body'>
          <div className='header'>
            <div className='view'>
              <div
                className={JOB_DATA.className}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div>
                  <i className={JOB_DATA.iconName}></i>
                </div>
                <div>
                  <b style={{ fontSize: 18 }}>{JOB_DATA.name}</b>
                  <div className='job-change'>
                    <Link
                      to='/job-selector'
                      onClick={() => dispatch(ChangeActivePage(5))}
                    >
                      Change Job
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='divider'></div>

          <div className='bar'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>
                <b>Level:</b> {JOB_LEVEL_DATA.LEVEL}
              </span>
              <span>
                (
                <i>
                  {JOB_LEVEL_DATA.EARNED_LEVEL_EXP.toLocaleString()}
                  &nbsp;/&nbsp;
                  {JOB_LEVEL_DATA.TOTAL_LEVEL_EXP.toLocaleString()}
                </i>
                )
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
