import { ThemeProvider } from './ui/theme-provider';

export const GlobalProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
