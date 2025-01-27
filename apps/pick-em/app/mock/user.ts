import { faker } from '@faker-js/faker';
import type { User } from '@/types/user';

export const createMockUser = (override?: Partial<User>): User => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    ...override, // Allow overriding any fields
  };
};

// Helper to create multiple users
export const createMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => createMockUser());
};
