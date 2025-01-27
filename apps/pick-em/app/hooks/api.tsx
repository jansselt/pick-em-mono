import { useQuery } from '@tanstack/react-query';
import { mockApi } from '@/mock/api';

export const useSeasonStandings = () => {
  return useQuery({
    queryKey: ['seasonStandings'],
    queryFn: () => mockApi.getSeasonStandings(),
  });
};

export const useThisWeekPicks = () => {
  return useQuery({
    queryKey: ['thisWeekPicks'],
    queryFn: () => mockApi.getAllUsersPicksForWeek(1),
  });
};
