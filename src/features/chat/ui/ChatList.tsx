import { useAuth } from '@/entities/auth';
import { ChatListItem, useChatsQuery } from '@/features/chat';
import * as stylex from '@stylexjs/stylex';
import { memo } from 'react';

const ChatList = () => {
  const { userId } = useAuth();
  const { data, isLoading, isError } = useChatsQuery(userId);

  // FIXME: 에러바운더리
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading friends.</div>;

  return (
    <div {...stylex.props(styles.list)}>
      {data
        ?.sort((a, b) => Number(b.isNew) - Number(a.isNew))
        .map((item) => <ChatListItem key={item.friendId} data={item} />)}
    </div>
  );
};

export default memo(ChatList);

const styles = stylex.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
});
