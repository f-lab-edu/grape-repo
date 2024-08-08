import { ProfilePage } from '@/pages/profile';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth/profile/')({
  component: () => <ProfilePage />,
});
