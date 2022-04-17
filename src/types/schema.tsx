import { EnemyInterface } from './enemy';
import { CurrencyInterface } from './currency';
import { JobInterface } from './job';
import { ItemInterface } from './item';
import { StatsInterface } from './stats';

export interface SchemaInterface {
  [store: symbol]: SchemaProps;
}

export interface SchemaProps {
  game: SchemaGameProps;

  stats: StatsInterface;

  activeEnemy: EnemyInterface;

  currencies: CurrencyInterface;
  jobs: JobInterface;
  items: ItemInterface;
}

export interface SchemaGameProps {
  elapsedTime: number;
  activePage: number;
}
