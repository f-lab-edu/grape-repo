import { type Messages, supabase } from '@/shared';
import { useEffect } from 'react';

const useRealTimeMessages = (
  chatId: string | undefined,
  setMessages: (messages: React.SetStateAction<Messages[]>) => void,
) => {
  useEffect(() => {
    if (!chatId) return;

    const channel = supabase
      .channel('messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `chat_id=eq.${chatId}`,
        },
        (payload) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            payload.new as Messages,
          ]);
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [chatId, setMessages]);
};

export default useRealTimeMessages;
