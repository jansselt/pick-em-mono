import { useDashboardView } from '@/context/dashboard';

export const Header = () => {
  const { currentView } = useDashboardView();

  let title = 'Your Picks';

  if (currentView === 'week') {
    title = "This Week's Picks";
  }

  if (currentView === 'standings') {
    title = 'Season Standings';
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 px-4">
      <h2 className="text-lg font-semibold">{title}</h2>
    </header>
  );
};
