import { CURRENCIES } from '../../constants/currencies';
import { ITEMS } from '../../constants/items';

import { SlotInterface } from '../../types/slot';
import { ItemProps } from '../../types/item';

import './slot.css';

export const Slot = (props: SlotInterface) => {
  let { index, image, name, amount, displayDropChance, height, width } = props;

  let dropAmount: string | number | null = null;
  let DROP_DATA: ItemProps = {};

  if (index == 'exp') {
    DROP_DATA = {
      name: name,
      amount: amount,
      image: image,
    };

    if (typeof DROP_DATA.amount !== 'undefined') {
      dropAmount = DROP_DATA.amount.toLocaleString();
    } else {
      dropAmount = '0';
    }
  } else if (index in CURRENCIES) {
    DROP_DATA = {
      name: name,
      amount: amount,
      image: CURRENCIES[index].image,
    };

    if (typeof DROP_DATA.amount !== 'undefined') {
      dropAmount = DROP_DATA.amount.toLocaleString();
    } else {
      dropAmount = '0';
    }
  } else if (index in ITEMS) {
    DROP_DATA = ITEMS[index];

    if (amount) {
      dropAmount = amount.toLocaleString();
    } else if (DROP_DATA.minAmount && DROP_DATA.maxAmount) {
      if (DROP_DATA.minAmount === DROP_DATA.maxAmount) {
        dropAmount = DROP_DATA.maxAmount.toLocaleString();
      } else {
        dropAmount = `${DROP_DATA.minAmount.toLocaleString()} - ${DROP_DATA.maxAmount.toLocaleString()}`;
      }
    }
  }

  if (Object.keys(DROP_DATA).length === 0 || !dropAmount) {
    return <></>;
  }

  return (
    <div className='slot'>
      <div className='icon'>
        <img
          src={DROP_DATA.image ?? DROP_DATA.image}
          alt={DROP_DATA.name}
          title={DROP_DATA.name}
          height={height ?? 32}
          width={width ?? 32}
        />
      </div>
      <div className='drop-data'>
        <div className='value'>{dropAmount}</div>
        {
          //@ts-ignore
          displayDropChance && DROP_DATA.dropChance > 0 ? (
            <div className='value'>{DROP_DATA.dropChance}%</div>
          ) : (
            ''
          )
        }
      </div>
    </div>
  );
};
