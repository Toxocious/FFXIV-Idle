export interface StatsInterface {
  [StatsName: string]: StatsProps;
}

export interface StatsProps {
  name: string;
  amount: number;
}
