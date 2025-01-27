export type ApiSeasonStanding = {
  username: string;
  userAvatar: string;
  totalPoints: number;
  weeks: {
    week: number;
    totalPoints: number;
  }[];
};

export type ApiSeasonStandings = ApiSeasonStanding[];
