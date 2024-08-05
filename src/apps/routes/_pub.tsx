import { getSession, signOutUser } from '@/entities/auth';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_pub')({
  beforeLoad: async () => {
    const session = await getSession();

    if (session) signOutUser();
  },
  component: () => <Outlet />,
});
