import { Title } from '@/shared';
import type { ChatItemType } from '@/shared/types/client';
import { PersonIcon } from '@radix-ui/react-icons';
import * as stylex from '@stylexjs/stylex';
import { Link } from '@tanstack/react-router';
import { Avatar } from 'antd';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { memo } from 'react';

const ChatListItem = ({ data }: { data: ChatItemType }) => {
  const { friendName, isNew, latestMessage, chatId } = data;
  const relativeTime = formatDistanceToNow(new Date(latestMessage.created_at), {
    addSuffix: true,
    locale: ko,
  });

  return (
    <Link
      to="/chat/$chatId"
      params={(prev) => ({ ...prev, chatId })}
      search={{ friendName: friendName }}
      {...stylex.props(styles.linkStyle)}
    >
      <div {...stylex.props(styles.flexCenter, styles.box)}>
        <div>
          <Avatar size={50} icon={<PersonIcon width={30} height={30} />} />
        </div>

        <div {...stylex.props(styles.flexCenter, styles.contentBox)}>
          <div {...stylex.props(styles.flexColumn)}>
            <p {...stylex.props(styles.name)}>{friendName}</p>

            <Title text={latestMessage.body} style={!isNew && styles.isRead} />
          </div>

          <div>
            <Title text={relativeTime} style={!isNew && styles.isRead} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ChatListItem);

const styles = stylex.create({
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },

  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    overflow: 'hidden',
    width: '100%',
  },

  box: {
    gap: '12px',
  },

  contentBox: {
    width: '100%',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },

  name: {
    margin: 0,
    fontWeight: 600,
  },

  isRead: {
    color: '#A3A3A3',
  },

  linkStyle: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
