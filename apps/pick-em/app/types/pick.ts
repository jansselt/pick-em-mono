import { Game } from './game';
import { Team } from './team';
import { User } from './user';

export type Pick = {
  id: string;
  user: User;
  game: Game;
  selectedTeam: Team;
  points: number;
  isCorrect: boolean;
};
