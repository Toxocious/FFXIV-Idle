import { useStore } from '../../providers/game';
import { CURRENCIES } from '../../constants/currencies';

import { CurrencyProps, CurrencyEntryProps } from '../../types/currency';

import './currency-list.css';

const CurrencyEntry = (props: CurrencyEntryProps) => {
  const { currencies, currencyID } = props;
  const CURRENCY_DATA: CurrencyProps = currencies[currencyID];

  if (typeof CURRENCY_DATA === 'undefined') {
    return <></>;
  }

  return (
    <div className='panel' style={{ minWidth: 218, width: '2em' }}>
      <div className='body'>
        <div
          className='header'
          style={{
            padding: '0.2rem 0.8rem',
          }}
        >
          <div className='view'>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div>
                <img
                  src={CURRENCY_DATA.image}
                  style={{ height: 32, width: 32 }}
                />
              </div>
              <div
                style={{
                  textOverflow: 'ellipsis',
                  overflow: 'auto',
                  width: 136,
                }}
                title={CURRENCY_DATA.name}
              >
                <b style={{ fontSize: '100%' }}>{CURRENCY_DATA.name}</b>
                <br />
                {CURRENCY_DATA.amount.toLocaleString()}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Currencies = () => {
  const { currencies } = useStore();

  return (
    <div className='currency-container'>
      {Object.keys(CURRENCIES).map((currenciesID) => (
        <CurrencyEntry
          key={currenciesID}
          currencyID={currenciesID}
          currencies={currencies}
        />
      ))}
    </div>
  );
};
