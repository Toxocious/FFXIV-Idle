import { useStore } from '../../providers/game';
import { ITEMS } from '../../constants/items';

import { ProgressBar } from '../../components/progress-bar';
import { Slot } from '../../components/slot';

import './gather-node.css';

export const GatherNode = () => {
  const { activeGather } = useStore();

  if (
    typeof activeGather === 'undefined' ||
    Object.keys(activeGather).length === 0
  ) {
    return (
      <>
        <h2>No active gatherable item node is set.</h2>
      </>
    );
  }

  const ITEM_INDEX = Object.keys(ITEMS).filter(
    (item) => ITEMS[item].name === activeGather.name
  )[0];

  return (
    <>
      <Slot
        index={ITEM_INDEX}
        image={activeGather?.image ?? null}
        name={activeGather?.name ?? null}
        amount={activeGather?.amount ?? null}
        displayDropChance={false}
        height={64}
        width={64}
      />

      <h2>{activeGather?.name}</h2>

      <div className='node-durability'>
        <div style={{ display: 'flex', gap: 5, alignItems: 'baseline' }}>
          <b style={{ fontSize: 16 }}>Node Durability:</b>
          <span>
            {activeGather?.currentDurability} / {activeGather?.nodeDurability}
          </span>
        </div>
        <ProgressBar
          currentValue={activeGather?.currentDurability}
          maxValue={activeGather?.nodeDurability}
        />
      </div>

      <div className='node-durability'>
        <div style={{ display: 'flex', gap: 5, alignItems: 'baseline' }}>
          <b style={{ fontSize: 16 }}>Node Quality:</b>
          <span>
            {activeGather?.currentQuality} / {activeGather?.nodeQuality}
          </span>
        </div>
        <ProgressBar
          progressType='experience'
          currentValue={activeGather?.currentQuality}
          maxValue={activeGather?.nodeQuality}
        />
      </div>
    </>
  );
};
