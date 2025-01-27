import { faker } from '@faker-js/faker';
import type { UserWeek } from '@/types/user-week';
import { createMockUser } from './user';
import { createMockWeek } from './week';
import { createMockPicks } from './pick';

export const createMockUserWeek = (override?: Partial<UserWeek>): UserWeek => {
  const user = createMockUser();
  const week = createMockWeek();
  const picks = createMockPicks(16); // Create picks for typical week of games

  // Calculate total points from correct picks only
  const totalPoints = picks
    .filter((pick) => pick.isCorrect)
    .reduce((sum, pick) => sum + pick.points, 0);

  return {
    id: faker.string.uuid(),
    user,
    week,
    picks,
    totalPoints, // This will now be sum of points from correct picks only
    ...override,
    // Recalculate totalPoints if picks were overridden
    ...(override?.picks && {
      totalPoints: override.picks
        .filter((pick) => pick.isCorrect)
        .reduce((sum, pick) => sum + pick.points, 0),
    }),
  };
};

// Helper to create multiple user weeks
export const createMockUserWeeks = (count: number): UserWeek[] => {
  return Array.from({ length: count }, () => createMockUserWeek());
};

// Helper to create user weeks for a specific user
export const createMockUserWeeksForUser = (
  userId: string,
  weekCount: number,
): UserWeek[] => {
  const user = createMockUser({ id: userId });
  return Array.from({ length: weekCount }, (_, index) =>
    createMockUserWeek({
      user,
      week: createMockWeek({ number: index + 1 }),
    }),
  );
};

// Usage:
// Single user week: createMockUserWeek()
// Multiple user weeks: createMockUserWeeks(5)
// User weeks for specific user: createMockUserWeeksForUser('user123', 18)
