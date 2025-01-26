import { type ReactNode } from 'react';
import { cn } from '@/lib/utils'; // shadcn utility for merging classes
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface DashboardContainerProps {
  children: ReactNode;
  className?: string;
}

export const DashboardContainer = ({
  children,
  className,
}: DashboardContainerProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              {/* You can add an icon here */}
              <span className="sr-only">Toggle menu</span>
            </Button>
            <h2 className="text-lg font-semibold">Dashboard</h2>
          </div>

          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:w-64 lg:flex-col">
          <nav className="flex flex-1 flex-col border-r bg-background px-3 py-4">
            {/* Sidebar content */}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className={cn('flex-1 overflow-y-auto bg-background', className)}>
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  );
};
