import { CalcLevelFromExp } from '../../utils/calc-level';
import { GetActiveJob } from '../../utils/get-active-job';

import './index.css';

// @ts-ignore
export const ActiveJob = ({}) => {
  const JOB_DATA: any = GetActiveJob();

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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>
                <b>Level:</b> {JOB_LEVEL_DATA.LEVEL}
              </span>
              <span>
                (
                <i>
                  {JOB_LEVEL_DATA.EARNED_LEVEL_EXP.toLocaleString()}
                  &nbsp;/&nbsp;
                  {JOB_LEVEL_DATA.TOTAL_LEVEL_EXP.toLocaleString()} xp
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
