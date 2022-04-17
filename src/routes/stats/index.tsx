import { useStore } from '../../providers/game';
import { STATS } from '../../constants/stats';

export function StatsWindow() {
  const { stats } = useStore();
  console.log('[Stats] Your Stats:', stats, Object.keys(stats));

  return (
    <>
      <h2>Stats</h2>

      <div>
        {Object.keys(stats).map((stat) => (
          <div key={stat} data-stat-key={stat} style={{ fontSize: 16 }}>
            <b>{STATS[stat].name}</b>: {STATS[stat].amount.toLocaleString()}
          </div>
        ))}
      </div>
    </>
  );
}
