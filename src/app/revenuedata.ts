export interface Revenuedata {
  name: string;
  yearTarget: number;
  summary: number;
  achievingRate: number;
  wip: number;
  estrevenue: number;
  data: Chartdata[];
}

export interface Chartdata {
  data: number[];
  label: string;
}
