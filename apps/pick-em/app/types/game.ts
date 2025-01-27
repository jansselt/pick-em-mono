import { GameResult } from './game-result';
import { Team } from './team';

export type Game = {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  result?: GameResult;
};
