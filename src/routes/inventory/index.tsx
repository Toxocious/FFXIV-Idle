import { useStore } from '../../providers/game';

import { Slot } from '../../components/slot';

export function InventoryWindow() {
  const { items } = useStore();
  console.log('[Inventory] Items:', items);

  return (
    <>
      <h2>Inventory</h2>
      <br />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1em 0.9em',
        }}
      >
        {Object.keys(items)
          .filter((item) => items[item].amount > 0)
          .map((item) => (
            <Slot
              index={item}
              amount={items[item].amount}
              displayDropChance={false}
            />
          ))}
      </div>
    </>
  );
}
