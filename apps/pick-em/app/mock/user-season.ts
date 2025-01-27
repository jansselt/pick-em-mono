import type { UserSeason } from '@/types/user-season';
import { createMockUser } from './user';
import { createMockSeason } from './season';
import { createMockUserWeeks } from './user-week';

export const createMockUserSeason = (
  override?: Partial<UserSeason>,
): UserSeason => {
  const user = createMockUser();
  const season = createMockSeason();
  const userWeeks = createMockUserWeeks(18); // Full NFL season

  // Calculate total points from all userWeeks
  const totalPoints = userWeeks.reduce(
    (sum, week) => sum + week.totalPoints,
    0,
  );

  return {
    user,
    season,
    userWeeks,
    totalPoints, // Sum of all userWeek totalPoints
    ...override,
    // Recalculate totalPoints if userWeeks were overridden
    ...(override?.userWeeks && {
      totalPoints: override.userWeeks.reduce(
        (sum, week) => sum + week.totalPoints,
        0,
      ),
    }),
  };
};

// Helper to create multiple user seasons
export const createMockUserSeasons = (count: number): UserSeason[] => {
  return Array.from({ length: count }, () => createMockUserSeason());
};

// Helper to create a user season for a specific user
export const createMockUserSeasonForUser = (userId: string): UserSeason => {
  const user = createMockUser({ id: userId });
  return createMockUserSeason({ user });
};

// Usage:
// Single user season: createMockUserSeason()
// Multiple user seasons: createMockUserSeasons(5)
// User season for specific user: createMockUserSeasonForUser('user123')
