import { Team } from './team';

export type GameResult = {
  id: string;
  winningTeam: Team;
  losingTeam: Team;
  winningTeamScore: number;
  losingTeamScore: number;
};
