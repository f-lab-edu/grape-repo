import type { FriendListItemType } from '@/shared';
import { PersonIcon } from '@radix-ui/react-icons';
import * as stylex from '@stylexjs/stylex';
import { Avatar } from 'antd';
import { memo } from 'react';

const FriendListItem = ({ data }: { data: FriendListItemType }) => {
  const { name } = data;

  return (
    <div {...stylex.props(styles.flexCenter, styles.box)}>
      <div>
        <Avatar size={50} icon={<PersonIcon width={30} height={30} />} />
      </div>

      <div {...stylex.props(styles.flexCenter, styles.contentBox)}>
        <p {...stylex.props(styles.name)}>{name}</p>
      </div>
    </div>
  );
};

export default memo(FriendListItem);

const styles = stylex.create({
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },

  box: {
    gap: '12px',
  },

  contentBox: {
    width: '100%',
    justifyContent: 'space-between',
  },

  name: {
    margin: 0,
    fontWeight: 600,
  },
});
