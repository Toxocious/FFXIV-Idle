export interface PageInterface {
  [pageIndex: number]: PageProps;
}

export interface PageProps {
  id: number;
  name: string;
  link: string;
  unlocked: boolean;
  display: boolean;
}
