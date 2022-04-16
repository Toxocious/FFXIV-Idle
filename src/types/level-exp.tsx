export interface LevelInterface {
  [level: number]: LevelProps;
}

export interface LevelProps {
  expToNextLevel: number;
  totalAccumulatedExp: number;
}
