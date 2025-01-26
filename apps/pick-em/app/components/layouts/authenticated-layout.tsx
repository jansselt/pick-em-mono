import { SidebarInset, SidebarProvider } from '@/ui/sidebar';
import { AppSidebar } from '@/components/navigation/app-sidebar';
import { DashboardViewProvider } from '@/context/dashboard';
import { Header } from '../header';

export const AuthenticatedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DashboardViewProvider>
      <SidebarProvider
        style={
          {
            '--sidebar-width': '16rem',
            '--sidebar-width-icon': '5rem',
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col h-screen">
            <Header />
            <section className="p-2 flex-1 overflow-auto">{children}</section>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </DashboardViewProvider>
  );
};
