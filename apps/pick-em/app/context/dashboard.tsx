import { createContext, useContext, useState, ReactNode } from 'react';

type DashboardView = 'picks' | 'standings' | 'week';

interface DashboardViewContextType {
  currentView: DashboardView;
  setCurrentView: (view: DashboardView) => void;
}

const DashboardViewContext = createContext<
  DashboardViewContextType | undefined
>(undefined);

interface DashboardViewProviderProps {
  children: ReactNode;
  defaultView?: DashboardView;
}

export const DashboardViewProvider = ({
  children,
  defaultView = 'picks',
}: DashboardViewProviderProps) => {
  const [currentView, setCurrentView] = useState<DashboardView>(defaultView);

  return (
    <DashboardViewContext.Provider
      value={{
        currentView,
        setCurrentView,
      }}
    >
      {children}
    </DashboardViewContext.Provider>
  );
};

export const useDashboardView = () => {
  const context = useContext(DashboardViewContext);
  if (context === undefined) {
    throw new Error(
      'useDashboardView must be used within a DashboardViewProvider',
    );
  }
  return context;
};
