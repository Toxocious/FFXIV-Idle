export interface CurrencyInterface {
  [currencyID: string]: CurrencyProps;
}

export interface CurrencyProps {
  name: string;
  amount: number;
  imageName: string;
  unlocked: boolean;
}
