import { Outlet, createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '@/components/layouts/authenticated-layout';

const LayoutComponent = () => {
  return (
    <AuthenticatedLayout>
      <Outlet />
    </AuthenticatedLayout>
  );
};

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});
