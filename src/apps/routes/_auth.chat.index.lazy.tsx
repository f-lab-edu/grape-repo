import { ChatPage } from '@/pages/chat';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth/chat/')({
  component: ChatPage,
});
