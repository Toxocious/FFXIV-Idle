import './index.css';

// @ts-ignore
export const ProgressBar = ({
  progressValue = 50,
  progressType = 'health',
}) => {
  const PROGRESS_BAR_WIDTH = `${progressValue}%`;
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
