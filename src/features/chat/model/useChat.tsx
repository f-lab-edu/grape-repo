import { assert } from '@/shared';
import { useContext } from 'react';
import { ChatContext } from '..';

const useChat = () => {
  const context = useContext(ChatContext);

  assert(context, 'useChat must be used within a ChatProvider');

  return context;
};

export default useChat;
