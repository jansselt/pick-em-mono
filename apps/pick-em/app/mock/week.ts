import { faker } from '@faker-js/faker';
import type { Week } from '@/types/week';
import { createMockGames } from '@/mock/game';
import { createMockGameResult } from '@/mock/game-result';
import { Game } from '@/types/game';

export const createMockWeek = (override?: Partial<Week>): Week => {
  return {
    id: faker.string.uuid(),
    number: faker.number.int({ min: 1, max: 18 }), // NFL regular season weeks
    games: createMockGames(faker.number.int({ min: 14, max: 16 })), // Typical number of NFL games per week
    isCompleted: faker.datatype.boolean(),
    isLocked: faker.datatype.boolean(),
    isCurrent: faker.datatype.boolean(),
    ...override,
  };
};

// Helper to create multiple weeks
export const createMockWeeks = (count: number): Week[] => {
  return Array.from(
    { length: count },
    (_, index) => createMockWeek({ number: index + 1 }), // Sequential week numbers
  );
};

// Helper to create a week with specific game conditions
export const createMockWeekWithCompletedGames = (weekNumber: number): Week => {
  return createMockWeek({
    number: weekNumber,
    games: createMockGames(16).map((game: Game) => ({
      ...game,
      result: createMockGameResult(game.homeTeam, game.awayTeam), // Ensure all games have results
    })),
  });
};

// Usage:
// Single week: createMockWeek()
// Single week with override: createMockWeek({ number: 5 })
// Multiple sequential weeks: createMockWeeks(18)
// Completed week: createMockWeekWithCompletedGames(3)
