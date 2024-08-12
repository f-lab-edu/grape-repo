import { LoginPage } from '@/pages/login';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_pub/login/')({
  component: () => <LoginPage />,
});
