import { Card, CardContent } from '@/ui/card';
import { DataTable } from '@/ui/data-table';
import { useSeasonStandings } from '@/hooks/api';

export const SeasonStandingsView = () => {
  const { data, isLoading } = useSeasonStandings();

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
      header: '1',
      accessorKey: 'weeks.0.totalPoints',
    },
    {
      header: '2',
      accessorKey: 'weeks.1.totalPoints',
    },
    {
      header: '3',
      accessorKey: 'weeks.2.totalPoints',
    },
    {
      header: '4',
      accessorKey: 'weeks.3.totalPoints',
    },
    {
      header: '5',
      accessorKey: 'weeks.4.totalPoints',
    },
    {
      header: '6',
      accessorKey: 'weeks.5.totalPoints',
    },
    {
      header: '7',
      accessorKey: 'weeks.6.totalPoints',
    },
    {
      header: '8',
      accessorKey: 'weeks.7.totalPoints',
    },
    {
      header: '9',
      accessorKey: 'weeks.8.totalPoints',
    },
    {
      header: '10',
      accessorKey: 'weeks.9.totalPoints',
    },
    {
      header: '11',
      accessorKey: 'weeks.10.totalPoints',
    },
    {
      header: '12',
      accessorKey: 'weeks.11.totalPoints',
    },
    {
      header: '13',
      accessorKey: 'weeks.12.totalPoints',
    },
    {
      header: '14',
      accessorKey: 'weeks.13.totalPoints',
    },
    {
      header: '15',
      accessorKey: 'weeks.14.totalPoints',
    },
    {
      header: '16',
      accessorKey: 'weeks.15.totalPoints',
    },
    {
      header: '17',
      accessorKey: 'weeks.16.totalPoints',
    },
    {
      header: '18',
      accessorKey: 'weeks.17.totalPoints',
    },
  ];

  if (isLoading) return <div>Loading...</div>;

  return (
    <Card className="w-full h-full">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <span className="text-md">Here Are The Season Standings</span>
          <DataTable columns={columns} data={data?.data ?? []} />
        </div>
      </CardContent>
    </Card>
  );
};
