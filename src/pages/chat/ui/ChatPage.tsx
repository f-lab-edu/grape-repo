import { ChatListItem, FriendListItem, List } from '@/features/chat';
import { CHAT_ITEM_MOCK, FRIEND_ITEM_MOCK } from '@/features/chat/mock';
import { PageLayout, SearchBar } from '@/shared';
import { Header } from '@/widgets';
import { NavigationBar } from '@/widgets/navigation';
import { memo, useState } from 'react';

const ChatPage = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>('채팅');

  const updateSelectedNavItem = (navItem: string) =>
    setSelectedNavItem(navItem);

  return (
    <PageLayout>
      <Header isPlusIconVisible />
      <NavigationBar
        onClick={updateSelectedNavItem}
        selectedNavItem={selectedNavItem}
      />
      <SearchBar />

      {selectedNavItem === '채팅' && (
        <List
          data={CHAT_ITEM_MOCK?.sort(
            (a, b) => Number(b.isNew) - Number(a.isNew),
          )}
          ItemComponent={ChatListItem}
        />
      )}

      {selectedNavItem === '친구 목록' && (
        <List
          data={FRIEND_ITEM_MOCK.sort((a, b) => a.name.localeCompare(b.name))}
          ItemComponent={FriendListItem}
        />
      )}
    </PageLayout>
  );
};

export default memo(ChatPage);
