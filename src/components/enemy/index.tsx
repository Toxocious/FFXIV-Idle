import { ProgressBar } from '../../components/progress-bar';

interface Props {
  enemy: any;
}

export const Enemy = (props: Props) => {
  const { enemy } = props;

  const ENEMY_DATA = enemy;

  if (
    typeof ENEMY_DATA === 'undefined' ||
    Object.keys(ENEMY_DATA).length === 0
  ) {
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
          <b>Health:</b> {ENEMY_DATA.currentHP} / {ENEMY_DATA.maxHP}
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
