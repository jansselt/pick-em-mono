import { faker } from '@faker-js/faker';
import type { Game } from '@/types/game';
import { createMockTeam } from '@/mock/team';
import { createMockGameResult } from '@/mock/game-result';

export const createMockGame = (override?: Partial<Game>): Game => {
  const homeTeam = createMockTeam();
  const awayTeam = createMockTeam();
  const result = faker.datatype.boolean()
    ? createMockGameResult(homeTeam, awayTeam)
    : undefined;

  return {
    id: faker.string.uuid(),
    homeTeam,
    awayTeam,
    date: faker.date.future().toISOString(),
    result,
    ...override,
  };
};

// Helper to create multiple games
export const createMockGames = (count: number): Game[] => {
  return Array.from({ length: count }, () => createMockGame());
};

export const createMockUpcomingGames = (count: number): Game[] => {
  return Array.from({ length: count }, () =>
    createMockGame({ result: undefined }),
  );
};

// Usage:
// Single game: createMockGame()
// Single game with override: createMockGame({ date: '2024-02-11' })
// Multiple games: createMockGames(5)
// Games with results: createMockGamesWithResults(5)
// Upcoming games: createMockUpcomingGames(5)
