import { fetchUserFriends } from '@/features/chat';
import { type FriendType, handleError } from '@/shared';
import { useQuery } from '@tanstack/react-query';

const useFriendsQuery = (userId: string | null) => {
  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['friends', userId],
    queryFn: () => fetchUserFriends(userId),
    enabled: !!userId,
  });

  handleError(error);

  const formattedData = data?.map((el) => {
    return { id: el.friend_id, friendName: el.friend_name };
  }) as FriendType[];

  return { data: formattedData, isError, isLoading, isSuccess };
};

export default useFriendsQuery;
