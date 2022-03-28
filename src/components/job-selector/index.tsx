import { Jobs } from '../job-list';

// @ts-ignore
export const JobSelector = ({}) => {
  return (
    <div className='job-selector'>
      <h2 style={{ textAlign: 'center' }}>Select A Job</h2>
      <Jobs showLevel={false} />
    </div>
  );
};
