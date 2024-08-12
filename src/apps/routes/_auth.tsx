import { getSession } from '@/entities/auth';
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async () => {
    const session = await getSession();

    if (!session) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: () => <Outlet />,
});
