import {BarDatum} from '@nivo/bar';

export class ActiveHour implements BarDatum {
  constructor(
    public hourKey = '',
    public tweets = 0
  ) {
  }

  [key: string]: string | number;
}