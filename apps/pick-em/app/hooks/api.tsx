import { useQuery } from '@tanstack/react-query';
import { mockApi } from '@/mock/api';

export const useCurrentSeason = () => {
  return useQuery({
    queryKey: ['season', 'current'],
    queryFn: () => mockApi.getCurrentSeason(),
  });
};

export const useUserSeasonStats = (userId: string) => {
  return useQuery({
    queryKey: ['userSeason', userId],
    queryFn: () => mockApi.getUserSeasonStats(userId),
  });
};

export const useSeasonStandings = () => {
  return useQuery({
    queryKey: ['seasonStandings'],
    queryFn: () => mockApi.getSeasonStandings(),
  });
};
