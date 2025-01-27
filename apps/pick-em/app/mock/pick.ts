import { faker } from '@faker-js/faker';
import type { Pick } from '@/types/pick';
import { createMockUser } from '@/mock/user';
import { createMockGame } from '@/mock/game';
import { createMockGameResult } from '@/mock/game-result';
import { createMockTeam } from './team';

export const createMockPick = (override?: Partial<Pick>): Pick => {
  const homeTeam = createMockTeam();
  const awayTeam = createMockTeam();
  const game = createMockGame({
    homeTeam,
    awayTeam,
    result: createMockGameResult(homeTeam, awayTeam),
  }); // Create game with result
  const selectedTeam = faker.datatype.boolean() ? game.homeTeam : game.awayTeam;

  const isCorrect = game.result?.winningTeam.id === selectedTeam.id;

  return {
    id: faker.string.uuid(),
    user: createMockUser(),
    game,
    selectedTeam,
    points: faker.number.int({ min: 1, max: 16 }),
    isCorrect,
    ...override,
  };
};

// Helper to create multiple picks
export const createMockPicks = (count: number): Pick[] => {
  return Array.from({ length: count }, () => createMockPick());
};

// Helper to create picks for a specific user
export const createMockPicksForUser = (
  userId: string,
  count: number,
): Pick[] => {
  return Array.from({ length: count }, () =>
    createMockPick({
      user: createMockUser({ id: userId }),
    }),
  );
};

// Helper to create correct picks
export const createMockCorrectPicks = (count: number): Pick[] => {
  return Array.from({ length: count }, () => {
    const homeTeam = createMockTeam();
    const awayTeam = createMockTeam();
    const game = createMockGame({
      homeTeam,
      awayTeam,
      result: createMockGameResult(homeTeam, awayTeam),
    });
    return createMockPick({
      game,
      selectedTeam: game.result?.winningTeam,
      isCorrect: true,
    });
  });
};

// Usage:
// Single pick: createMockPick()
// Single pick with override: createMockPick({ points: 10 })
// Multiple picks: createMockPicks(5)
// User's picks: createMockPicksForUser('user123', 5)
// Correct picks: createMockCorrectPicks(5)
