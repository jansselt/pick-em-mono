import { MyPicksView } from '@/components/views/my-picks-view';
import { SeasonStandingsView } from '@/components/views/season-standings';
import { WeekPicksView } from '@/components/views/week-picks-view';
import { useDashboardView } from '@/context/dashboard';
import { createFileRoute } from '@tanstack/react-router';

const Dashboard = () => {
  const { currentView } = useDashboardView();

  if (currentView === 'week') {
    return <WeekPicksView />;
  }

  if (currentView === 'standings') {
    return <SeasonStandingsView />;
  }

  return <MyPicksView />;
};

export const Route = createFileRoute('/_layout/')({
  component: Dashboard,
});
