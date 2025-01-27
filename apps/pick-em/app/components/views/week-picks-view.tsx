import { Card, CardContent } from '@/ui/card';
import { DataTable } from '../ui/data-table';
import { useThisWeekPicks } from '@/hooks/api';

export const WeekPicksView = () => {
  const { data, isLoading } = useThisWeekPicks();

  const columns = [
    {
      header: 'User',
      accessorKey: 'username',
    },
    {
      header: 'Total',
      accessorKey: 'totalPoints',
    },
    {
      header: 'Game1',
      accessorKey: 'games.0.points',
    },
    {
      header: 'Game 3',
      accessorKey: 'games.2.points',
    },
    {
      header: 'Game 4',
      accessorKey: 'games.3.points',
    },
    {
      header: 'Game 5',
      accessorKey: 'games.4.points',
    },
    {
      header: 'Game 6',
      accessorKey: 'games.5.points',
    },
    {
      header: 'Game 7',
      accessorKey: 'games.6.points',
    },
    {
      header: 'Game 8',
      accessorKey: 'games.7.points',
    },
    {
      header: 'Game 9',
      accessorKey: 'games.8.points',
    },
    {
      header: 'Game 10',
      accessorKey: 'games.9.points',
    },
    {
      header: 'Game 11',
      accessorKey: 'games.10.points',
    },
    {
      header: 'Game 12',
      accessorKey: 'games.11.points',
    },
    {
      header: 'Game 13',
      accessorKey: 'games.12.points',
    },
    {
      header: 'Game 14',
      accessorKey: 'games.13.points',
    },
    {
      header: 'Game 15',
      accessorKey: 'games.14.points',
    },
    {
      header: 'Game 16',
      accessorKey: 'games.15.points',
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="w-full h-full">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <span className="text-md">
            Here Are Everyone's Picks For This Week
          </span>
          <DataTable columns={columns} data={data?.data ?? []} />
        </div>
      </CardContent>
    </Card>
  );
};
