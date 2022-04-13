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
  let { index, image, name, amount, displayDropChance } = props;

  let DROP_DATA: any;
  if (index == 'exp') {
    DROP_DATA = {
      name: name,
      amount: amount,
      imageName: image,
    };
  } else if (index in CURRENCIES) {
    DROP_DATA = {
      name: name,
      amount: amount,
      imageName: CURRENCIES[index].imageName,
    };
  } else if (index in ITEMS) {
    DROP_DATA = ITEMS[index];
    console.log('Amount:', amount, '|| Drop Data:', DROP_DATA);

    if (amount) {
      DROP_DATA.amount = amount;
    } else if (DROP_DATA.minAmount && DROP_DATA.maxAmount) {
      if (DROP_DATA.minAmount === DROP_DATA.maxAmount) {
        DROP_DATA.amount = DROP_DATA.maxAmount;
      } else {
        DROP_DATA.amount = Math.floor(Math.random() * DROP_DATA.maxAmount);
      }
    } else {
      DROP_DATA.amount = 0;
    }
  }

  if (!DROP_DATA || DROP_DATA.amount < 1) {
    return <></>;
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
      <div className='value'>x{DROP_DATA.amount.toLocaleString()}</div>
      {displayDropChance && DROP_DATA.dropChance > 0 ? (
        <div className='value'>{DROP_DATA.dropChance}%</div>
      ) : (
        ''
      )}
    </div>
  );
};
