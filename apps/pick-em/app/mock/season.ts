import { faker } from '@faker-js/faker';
import type { Season } from '@/types/season';
import { createMockWeeks } from './week';
import { createMockWeek } from './week';
import { createMockWeekWithCompletedGames } from './week';

export const createMockSeason = (override?: Partial<Season>): Season => {
  return {
    id: faker.string.uuid(),
    weeks: createMockWeeks(18), // NFL regular season has 18 weeks
    ...override,
  };
};

// Helper to create multiple seasons
export const createMockSeasons = (count: number): Season[] => {
  return Array.from({ length: count }, () => createMockSeason());
};

// Helper to create a season with specific conditions
export const createMockSeasonWithCompletedWeeks = (
  completedWeekCount: number,
): Season => {
  const weeks = Array.from({ length: 18 }, (_, index) => {
    if (index < completedWeekCount) {
      return createMockWeekWithCompletedGames(index + 1); // Completed weeks
    }
    return createMockWeek({ number: index + 1 }); // Future weeks
  });

  return createMockSeason({ weeks });
};

// Usage:
// Single season: createMockSeason()
// Single season with override: createMockSeason({ id: 'season-2023' })
// Multiple seasons: createMockSeasons(3)
// Season with first 5 weeks completed: createMockSeasonWithCompletedWeeks(5)
