import { Enemy } from '../../components/enemy';

import './battle.css';

export function BattleWindow() {
  return (
    <>
      <h2>Battle</h2>
      <br />

      <div className='battle-container'>
        <Enemy />
      </div>
    </>
  );
}
