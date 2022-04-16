export interface JobInterface {
  [jobName: string]: JobProps;
}

export interface JobProps {
  name: string;
  type: string;
  level: number;
  exp: number;
  iconName: string;
  className: string;
  unlocked: boolean;
  active: boolean;
}
