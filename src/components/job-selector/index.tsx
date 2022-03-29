import { Jobs } from '../job-list';

export const JobSelector = ({}) => {
  return (
    <div className='job-selector'>
      <h2 style={{ margin: 0, textAlign: 'center' }}>Select Your Job Class</h2>
      <br />
      <Jobs showLevel={true} clickToSwitch={true} />
    </div>
  );
};
