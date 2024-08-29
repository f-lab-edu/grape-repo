import type { ChatListItemType, FriendListItemType } from '@/shared';
import * as stylex from '@stylexjs/stylex';
import { memo } from 'react';

const List = ({
  data,
  ItemComponent,
}: {
  data: ChatListItemType[] | FriendListItemType[];
  ItemComponent: React.ElementType;
}) => {
  return (
    <div {...stylex.props(styles.list)}>
      {data?.map((item) => <ItemComponent key={item.id} data={item} />)}
    </div>
  );
};

export default memo(List);

const styles = stylex.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
});
