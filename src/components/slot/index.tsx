import { CURRENCIES } from '../../constants/currencies';
import { ITEMS } from '../../constants/items';

import './index.css';

interface Props {
  index: string;
  image?: string;
  name?: string;
  amount?: number;
  displayDropChance?: boolean;
}

export const Slot = (props: Props) => {
  const { index, image, name, amount, displayDropChance } = props;

  let DROP_DATA: any;
  if (index == 'exp') {
    DROP_DATA = {
      name: name,
      amount: amount,
      imageName: image,
    };
  }
  if (index in CURRENCIES) {
    DROP_DATA = {
      name: name,
      amount: amount,
      imageName: CURRENCIES[index].imageName,
    };
  } else if (index in ITEMS) {
    DROP_DATA = ITEMS[index];

    if (typeof amount !== 'undefined') {
      DROP_DATA.amount = amount;
    }
  }

  if (DROP_DATA.amount < 1) {
    return <></>;
  }

  let dropAmount: number | string;
  if (typeof amount === 'undefined') {
    if (DROP_DATA.minAmount === DROP_DATA.maxAmount) {
      dropAmount = DROP_DATA.minAmount ?? DROP_DATA.amount.toLocaleString();
    } else {
      dropAmount = `${DROP_DATA.minAmount.toLocaleString()} - ${DROP_DATA.maxAmount.toLocaleString()}`;
    }
  } else {
    dropAmount = amount.toLocaleString();
  }

  return (
    <div className='slot'>
      <div className='icon'>
        <img
          src={DROP_DATA.image ?? DROP_DATA.imageName}
          alt={DROP_DATA.name}
          title={DROP_DATA.name}
        />
      </div>
      <div className='value'>x{dropAmount}</div>
      {displayDropChance && DROP_DATA.dropChance > 0 ? (
        <div className='value'>{DROP_DATA.dropChance}%</div>
      ) : (
        ''
      )}
    </div>
  );
};
