import { faker } from '@faker-js/faker';
import type { GameResult } from '@/types/game-result';
import { Team } from '@/types/team';

export const createMockGameResult = (
  winningTeam: Team,
  losingTeam: Team,
  override?: Partial<GameResult>,
): GameResult => {
  const winningTeamScore = faker.number.int({ min: 21, max: 45 });
  const losingTeamScore = faker.number.int({
    min: 0,
    max: winningTeamScore - 1,
  });

  return {
    id: faker.string.uuid(),
    winningTeam,
    losingTeam,
    winningTeamScore,
    losingTeamScore,
    ...override,
  };
};

// Usage:
// Single result: createMockGameResult()
// Single result with override: createMockGameResult({ winningTeamScore: 35 })
