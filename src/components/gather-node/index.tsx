import { useStore } from '../../providers/game';
import { ITEMS } from '../../constants/items';

import { ProgressBar } from '../../components/progress-bar';
import { Slot } from '../../components/slot';

import './index.css';

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
  console.log(activeGather, ITEM_INDEX);

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
        <b style={{ fontSize: 16 }}>Durability</b>
        <ProgressBar currentValue={80} maxValue={100} />
      </div>
    </>
  );
};
