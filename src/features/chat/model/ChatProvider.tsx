import { ChatContext } from '@/features/chat';
import { navList } from '@/shared';
import { useState } from 'react';

const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>('채팅');

  const handleNavigation = (index: number) => {
    setSelectedNavItem(navList[index]);
  };

  return (
    <ChatContext.Provider value={{ selectedNavItem, handleNavigation }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
