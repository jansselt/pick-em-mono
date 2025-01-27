import { faker } from '@faker-js/faker';
import type { Team } from '@/types/team';

export const createMockTeam = (override?: Partial<Team>): Team => {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    logo: faker.image.url({ width: 200, height: 200 }),
    code: faker.string.alphanumeric(3).toUpperCase(),
    ...override,
  };
};

// Helper to create multiple teams
export const createMockTeams = (count: number): Team[] => {
  return Array.from({ length: count }, () => createMockTeam());
};

// Usage:
// Single team: createMockTeam()
// Single team with override: createMockTeam({ name: 'Eagles' })
// Multiple teams: createMockTeams(32)
