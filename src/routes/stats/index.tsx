import { useStore } from '../../providers/game';

export function StatsWindow() {
  const { stats } = useStore();

  return (
    <>
      <h2>Stats</h2>

      <div>
        {Object.keys(stats).map((stat) => (
          <div key={stat} data-stat-key={stat} style={{ fontSize: 16 }}>
            <b>{stats[stat].name}</b>: {stats[stat].amount.toLocaleString()}
          </div>
        ))}
      </div>
    </>
  );
}
