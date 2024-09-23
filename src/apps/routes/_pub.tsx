import { signOutUser } from '@/entities/auth';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_pub')({
  beforeLoad: signOutUser,
  component: () => <Outlet />,
});
