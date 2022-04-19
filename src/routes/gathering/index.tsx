import { GatherNode } from '../../components/gather-node';

import './index.css';

export function GatheringWindow() {
  return (
    <>
      <h2>Gathering Window</h2>

      <div className='gathering-container'>
        <GatherNode />
      </div>
    </>
  );
}
