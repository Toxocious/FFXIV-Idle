import { ProgressBarInterface } from '../../types/progress-bar';

import './index.css';

export const ProgressBar = (props: ProgressBarInterface) => {
  const { currentValue = 100, maxValue = 100, progressType = 'health' } = props;

  const PROGRESS_BAR_WIDTH = `${(currentValue / maxValue) * 100}%`;
  const PROGRESS_BAR_CLASSNAME = `progress-bar-content ${progressType}`;

  return (
    <div className='progress-bar'>
      <div className='progress-bar-body'>
        <div
          className={PROGRESS_BAR_CLASSNAME}
          style={{
            width: PROGRESS_BAR_WIDTH,
          }}
        ></div>
      </div>
    </div>
  );
};
