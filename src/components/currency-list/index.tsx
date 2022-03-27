import React from 'react';
import { useStore } from '../../context/game-context';

import { CURRENCIES } from '../../constants/currencies';

import './index.css';

// @ts-ignore
const CurrencyEntry = ({ currencyID, currencies }) => {
  // @ts-ignore
  const CURRENCY_DATA: any = currencies[currencyID];

  return (
    <div className='panel' style={{ minWidth: 218, width: '2em' }}>
      <div className='body'>
        <div className='header'>
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
                  src={CURRENCY_DATA.imageName}
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
                {CURRENCY_DATA.value.toLocaleString()}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Currencies = () => {
  // @ts-ignore
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
