import { Enemy } from '../../components/enemy';

import './index.css';

export function BattleWindow() {
  return (
    <>
      <h2>Battle</h2>
      <br />

      <div className='battle-container'>
        <Enemy enemyID={5} />
      </div>
    </>
  );
}
