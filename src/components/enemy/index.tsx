import { useStore } from '../../providers/game';

import { ProgressBar } from '../../components/progress-bar';
import { Slot } from '../../components/slot';

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
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 5,
          }}
        >
          <h2>{activeEnemy.name}</h2>
          <b>Lv.</b> {activeEnemy.level}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <b>Health:</b> {activeEnemy.currentHP.toLocaleString()} /{' '}
          {activeEnemy.maxHP.toLocaleString()}
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
          <br />

          <div
            style={{
              alignItems: 'flex-start',
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              maxHeight: 146,
              overflow: 'scroll',
            }}
          >
            {Object.keys(activeEnemy.drops).map((drop: any) => (
              <div key={drop}>
                <Slot
                  index={drop}
                  image={activeEnemy.drops[drop]?.image ?? ''}
                  name={activeEnemy.drops[drop]?.name ?? ''}
                  amount={activeEnemy.drops[drop]?.amount ?? 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
