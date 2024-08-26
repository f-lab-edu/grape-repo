import { Title } from '@/shared';
import type { ChatListItemType } from '@/shared/types/client';
import { PersonIcon } from '@radix-ui/react-icons';
import * as stylex from '@stylexjs/stylex';
import { Avatar } from 'antd';
import { memo } from 'react';

const ChatListItem = ({ data }: { data: ChatListItemType }) => {
  const { name, title, isNew, relativeTime } = data;

  return (
    <div {...stylex.props(styles.flexCenter, styles.box)}>
      <div>
        <Avatar size={50} icon={<PersonIcon width={30} height={30} />} />
      </div>

      <div {...stylex.props(styles.flexCenter, styles.contentBox)}>
        <div {...stylex.props(styles.flexColumn)}>
          <p {...stylex.props(styles.name)}>{name}</p>

          <Title text={title} style={!isNew && styles.isRead} />
        </div>

        <div {...stylex.props(styles.timeTextBox)}>
          <Title text={relativeTime} style={!isNew && styles.isRead} />
        </div>
      </div>
    </div>
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

  timeTextBox: {
    width: '50px',
  },
});
