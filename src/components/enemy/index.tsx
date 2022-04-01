import { GetEnemyData } from '../../utils/get-enemy-data';
import { ProgressBar } from '../../components/progress-bar';

// @ts-ignore
export const Enemy = ({ enemyID }) => {
  const ENEMY_DATA = GetEnemyData(enemyID);

  if (typeof enemyID === 'undefined' || typeof ENEMY_DATA === 'undefined') {
    return (
      <>
        <h2>An error occurred while parsing the selected enemy.</h2>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'end',
          flexWrap: 'wrap',
          justifyContent: 'center',
          fontSize: 14,
          gap: 5,
        }}
      >
        <div>
          <h2>{ENEMY_DATA.name}</h2>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <b>Health:</b> 50 / 100
        </div>

        <ProgressBar />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          fontSize: 14,
          gap: 5,
        }}
      >
        <div>
          <h2>Drops</h2>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: 146,
              overflow: 'scroll',
              width: 160,
            }}
          >
            {Object.keys(ENEMY_DATA.drops).map((drop: any) => (
              <div key={drop}>
                <b>{ENEMY_DATA.drops[drop].name}</b>:{' '}
                {ENEMY_DATA.drops[drop].amount}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2>Battle Log</h2>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: 146,
              overflow: 'scroll',
              width: 280,
            }}
          >
            <div>... log action data</div>
          </div>
        </div>
      </div>
    </>
  );
};
