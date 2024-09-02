import { type ChatItemType, handleError } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import fetchChats from '../apis/fetchUserChats';

const useChatsQuery = (userId: string | null) => {
  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['chats', userId],
    queryFn: () => fetchChats(userId),
    enabled: !!userId,
    select: (data) =>
      data?.map(
        (chat): ChatItemType => ({
          chatId: chat.chatid,
          friendId: chat.friend_id,
          friendName: chat.friend_name,
          isNew: chat.isNew,
          latestMessage: {
            body: chat.latestmessage_body,
            created_at: chat.latest_message_created_at,
          },
        }),
      ),
  });

  handleError(error);

  return { data, isError, isLoading, isSuccess };
};

export default useChatsQuery;
