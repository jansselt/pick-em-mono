import {
  ApiUserWeekPick,
  ApiThisWeekPicks,
} from '@/types/api/this-weeks-picks';
import { createMockUserSeasons } from './user-season';
import { ApiSeasonStandings } from '@/types/api/season-standing';
import { faker } from '@faker-js/faker';

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// API response types
interface ApiResponse<T> {
  data: T;
  error?: string;
}

export const mockApi = {
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

  getAllUsersPicksForWeek: async (
    weekNumber: number,
  ): Promise<ApiResponse<ApiThisWeekPicks>> => {
    await delay(500);
    const userSeasons = createMockUserSeasons(25);

    const userWeekPicks: ApiThisWeekPicks = [];

    userSeasons.forEach((userSeason) => {
      const thisWeek = userSeason.userWeeks.find(
        (week) => week.week.number === weekNumber,
      );
      if (thisWeek) {
        const userWeekPick: ApiUserWeekPick = {
          username: thisWeek.user.name,
          userAvatar: thisWeek.user.avatar,
          totalPoints: thisWeek.totalPoints,
          games: [],
        };

        thisWeek.picks.forEach((pick) => {
          userWeekPick.games.push({
            gameId: pick.game.id,
            selectedTeamCode: pick.selectedTeam.code,
            points: pick.points,
            isCorrect: pick.isCorrect,
          });
        });
        userWeekPicks.push(userWeekPick);
      }
    });

    return {
      data: userWeekPicks,
    };
  },
};
