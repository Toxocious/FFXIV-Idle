import './index.css';

interface Props {
  progressValue?: number;
  progressType?: string;
}

export const ProgressBar = (props: Props) => {
  const { progressValue = 100, progressType = 'health' } = props;

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
