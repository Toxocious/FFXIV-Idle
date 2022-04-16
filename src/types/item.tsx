export interface ItemInterface {
  [itemIndex: string]: ItemProps;
}

export interface ItemProps {
  name: string;
  image: string;
  minAmount: number;
  maxAmount: number;
  dropChance: number;
  gatherable: boolean;
}
