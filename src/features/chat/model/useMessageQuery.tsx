import { fetchMessagesForChat } from '@/features/chat';
import { handleError } from '@/shared';
import { useQuery } from '@tanstack/react-query';

const useMessagesQuery = (chatId: string | undefined) => {
  const { error, ...rest } = useQuery({
    queryKey: ['messages', chatId],
    queryFn: () => fetchMessagesForChat(chatId),
    enabled: !!chatId,
  });

  return handleError({ data: rest, error });
};

export default useMessagesQuery;
