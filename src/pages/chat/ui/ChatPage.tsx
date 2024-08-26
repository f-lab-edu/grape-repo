import { ChatListItem, FriendListItem, List, useChat } from '@/features/chat';
import { CHAT_ITEM_MOCK, FRIEND_ITEM_MOCK } from '@/features/chat/mock';
import { PageLayout, SearchBar } from '@/shared';
import { Header } from '@/widgets';
import { NavigationBar } from '@/widgets/navigation';
import { memo } from 'react';

const ChatPage = () => {
  const { selectedNavItem, handleNavigation } = useChat();

  return (
    <PageLayout>
      <Header isPlusIconVisible />
      <NavigationBar onClick={handleNavigation} />
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
