export type ApiUserWeekPick = {
  username: string;
  userAvatar: string;
  totalPoints: number;
  games: {
    gameId: string;
    selectedTeamCode: string;
    points: number;
    isCorrect: boolean;
  }[];
};

export type ApiThisWeekPicks = ApiUserWeekPick[];
