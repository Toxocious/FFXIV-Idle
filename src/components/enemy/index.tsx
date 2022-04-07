import { useStore } from '../../context/game-context';

import { ProgressBar } from '../../components/progress-bar';

export const Enemy = () => {
  const { activeEnemy } = useStore();

  if (
    typeof activeEnemy === 'undefined' ||
    Object.keys(activeEnemy).length === 0
  ) {
    return (
      <>
        <h2>An error occurred while parsing the selected activeEnemy.</h2>
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
          <h2>{activeEnemy.name}</h2>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <b>Health:</b> {activeEnemy.currentHP} / {activeEnemy.maxHP}
        </div>

        <ProgressBar
          currentValue={activeEnemy.currentHP}
          maxValue={activeEnemy.maxHP}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          fontSize: 14,
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
            }}
          >
            {Object.keys(activeEnemy.drops).map((drop: any) => (
              <div key={drop}>
                <b>{activeEnemy.drops[drop].name}</b>:{' '}
                {activeEnemy.drops[drop].amount}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
