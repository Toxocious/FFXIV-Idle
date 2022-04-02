import { GetActiveEnemy } from '../../utils/get-active-enemy';

import { Enemy } from '../../components/enemy';

import './index.css';

export function BattleWindow() {
  const ACTIVE_ENEMY = GetActiveEnemy();
  console.log('[Battle Page] Active Enemy:', ACTIVE_ENEMY);

  return (
    <>
      <h2>Battle</h2>
      <br />

      <div className='battle-container'>
        {Object.keys(ACTIVE_ENEMY).length === 0 ? (
          <>There is no active enemy.</>
        ) : (
          <Enemy enemy={ACTIVE_ENEMY} />
        )}
      </div>
    </>
  );
}
