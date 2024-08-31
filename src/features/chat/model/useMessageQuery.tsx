import { fetchMessagesForChat } from '@/features/chat';
import { handleError } from '@/shared';
import { useQuery } from '@tanstack/react-query';

const useMessagesQuery = (chatId: string | undefined) => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['messages', chatId],
    queryFn: () => fetchMessagesForChat(chatId),
    enabled: !!chatId,
  });

  handleError(error);

  return { data, isLoading, isError };
};

export default useMessagesQuery;
