import { useAuth } from '@/entities/auth';
import { FriendListItem, useFriendsQuery } from '@/features/chat';
import * as stylex from '@stylexjs/stylex';
import { memo } from 'react';

const FriendList = () => {
  const { userId } = useAuth();
  const { data, isLoading } = useFriendsQuery(userId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div {...stylex.props(styles.list)}>
      {data
        ?.sort((a, b) => a.friendName.localeCompare(b.friendName))
        .map((item) => <FriendListItem key={item.id} data={item} />)}
    </div>
  );
};

export default memo(FriendList);

const styles = stylex.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
});
