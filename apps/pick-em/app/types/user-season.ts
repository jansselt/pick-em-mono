import { Season } from './season';
import { User } from './user';
import { UserWeek } from './user-week';

export type UserSeason = {
  user: User;
  season: Season;
  userWeeks: UserWeek[];
  totalPoints: number;
};
