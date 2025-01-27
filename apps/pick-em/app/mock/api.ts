import { createMockSeason } from './season';
import { createMockUserSeason, createMockUserSeasons } from './user-season';
import { ApiSeasonStandings } from '@/types/season-standing';

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// API response types
interface ApiResponse<T> {
  data: T;
  error?: string;
}

export const mockApi = {
  // Example endpoint that transforms data
  getCurrentSeason: async (): Promise<
    ApiResponse<{
      currentWeek: number;
      totalWeeks: number;
      gamesThisWeek: number;
    }>
  > => {
    await delay(500); // Simulate network latency
    const season = createMockSeason();
    const currentWeek =
      season.weeks.find((w) => new Date(w.games[0].date) > new Date())
        ?.number ?? 1;

    return {
      data: {
        currentWeek,
        totalWeeks: season.weeks.length,
        gamesThisWeek: season.weeks[currentWeek - 1].games.length,
      },
    };
  },

  getUserSeasonStats: async (
    userId: string,
  ): Promise<
    ApiResponse<{
      rank: number;
      totalPoints: number;
      correctPicks: number;
      weeklyStats: Array<{
        week: number;
        points: number;
        rank: number;
      }>;
    }>
  > => {
    await delay(500);
    const userSeason = createMockUserSeason();

    return {
      data: {
        rank: Math.floor(Math.random() * 100) + 1,
        totalPoints: userSeason.totalPoints,
        correctPicks: userSeason.userWeeks.reduce(
          (sum, week) => sum + week.picks.filter((p) => p.isCorrect).length,
          0,
        ),
        weeklyStats: userSeason.userWeeks.map((week) => ({
          week: week.week.number,
          points: week.totalPoints,
          rank: Math.floor(Math.random() * 100) + 1,
        })),
      },
    };
  },

  getSeasonStandings: async (): Promise<ApiResponse<ApiSeasonStandings>> => {
    await delay(500);
    const userSeasons = createMockUserSeasons(25);

    return {
      data: userSeasons.map((userSeason) => ({
        username: userSeason.user.name,
        userAvatar: userSeason.user.avatar,
        totalPoints: userSeason.totalPoints,
        weeks: userSeason.userWeeks
          .sort((a, b) => b.week.number - a.week.number)
          .map((week) => ({
            week: week.week.number,
            totalPoints: week.totalPoints,
          })),
      })),
    };
  },
};
