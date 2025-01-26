import { useDashboardView } from '@/context/dashboard';
import { SidebarIconButton } from './sidebar-icon';
import { useSidebar } from '../ui/sidebar';

export const NavMain = () => {
  const { open } = useSidebar();
  const { currentView, setCurrentView } = useDashboardView();

  return (
    <div className="flex flex-col gap-2 justify-center p-2">
      <SidebarIconButton
        src="/path/to/image.png"
        fallback="P"
        label="Your Picks"
        isExpanded={open}
        isActive={currentView === 'picks'}
        onClick={() => setCurrentView('picks')}
      />

      <SidebarIconButton
        src="/path/to/week.png"
        fallback="W"
        label="This Week's Picks"
        isExpanded={open}
        isActive={currentView === 'week'}
        onClick={() => setCurrentView('week')}
      />

      <SidebarIconButton
        src="/path/to/standings.png"
        fallback="S"
        label="Season Standings"
        isExpanded={open}
        isActive={currentView === 'standings'}
        onClick={() => setCurrentView('standings')}
      />
    </div>
  );
};
