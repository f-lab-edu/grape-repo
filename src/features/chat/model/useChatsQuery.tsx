import { type ChatItemType, handleError } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import fetchChats from '../apis/fetchUserChats';

const useChatsQuery = (userId: string | null) => {
  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['chats', userId],
    queryFn: () => fetchChats(userId),
    enabled: !!userId,
  });

  handleError(error);

  const formattedData = data?.map((el) => {
    return {
      chatId: el.chatid,
      friendId: el.friend_id,
      friendName: el.friend_name,
      isNew: el.isNew,
      latestMessage: {
        body: el.latestmessage_body,
        created_at: el.latest_message_created_at,
      },
    };
  }) as ChatItemType[];

  return { data: formattedData, isError, isLoading, isSuccess };
};

export default useChatsQuery;
