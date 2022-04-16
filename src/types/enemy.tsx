export interface EnemyInterface {
  [enemyIndex: number]: EnemyProps;
}

export interface EnemyProps {
  name: string;
  boss: boolean;
  level: number;
  maxHP: number;
  currentHP: number | null;
  drops: EnemyDrop;
}

export interface EnemyDrop {
  [dropIndex: string]: EnemyDrops | null;
}

export interface EnemyDrops {
  name?: string;
  amount?: number;
  image?: string;
}
