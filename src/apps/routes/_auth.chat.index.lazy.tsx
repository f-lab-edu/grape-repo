import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth/chat/')({
  component: () => <div>Hello /_auth/chat/!</div>,
});
