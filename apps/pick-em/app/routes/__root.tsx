import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router';
import { Meta, Scripts } from '@tanstack/start';
import { StrictMode, type ReactNode } from 'react';
import {} from '@/ui/theme-provider';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { GlobalProviders } from '@/components/global-providers';

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

const RootComponent = () => {
  return (
    <RootDocument>
      <Outlet />
      <TanStackRouterDevtools />
    </RootDocument>
  );
};

const RootDocument = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        <StrictMode>
          <GlobalProviders>
            {children}
            <ScrollRestoration />
            <Scripts />
          </GlobalProviders>
        </StrictMode>
      </body>
    </html>
  );
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});
