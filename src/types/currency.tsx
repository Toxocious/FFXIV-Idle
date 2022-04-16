export interface CurrencyInterface {
  [currencyID: string]: CurrencyProps;
}

export interface CurrencyProps {
  name: string;
  amount: number;
  image: string;
  unlocked: boolean;
}

export interface CurrencyEntryProps {
  readonly currencyID: any;
  readonly currencies: [];
}
