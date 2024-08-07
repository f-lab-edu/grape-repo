import { AuthProvider } from '@/entities/auth';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <Outlet />
      {import.meta.env.MODE === 'development' && <TanStackRouterDevtools />}
    </AuthProvider>
  ),
});
