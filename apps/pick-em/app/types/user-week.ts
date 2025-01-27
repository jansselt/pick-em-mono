import { User } from './user';
import { Week } from './week';
import { Pick } from './pick';

export type UserWeek = {
  id: string;
  user: User;
  week: Week;
  picks: Pick[];
  totalPoints: number;
};
