import { fetchUserFriends } from '@/features/chat';
import { type FriendType, handleError } from '@/shared';
import { useSuspenseQuery } from '@tanstack/react-query';

const useFriendsQuery = (userId: string | null) => {
  const { data, error, isError, isLoading } = useSuspenseQuery({
    queryKey: ['friends', userId],
    queryFn: () => fetchUserFriends(userId),
    select: (data) =>
      data?.map((user): FriendType => {
        return {
          id: user.friend_id,
          friendName: user.friend_name,
        };
      }),
  });

  handleError(error);

  return { data, isError, isLoading };
};

export default useFriendsQuery;
