import { type Message, supabase } from '@/shared';
import { useEffect, useState } from 'react';

const useRealTimeMessages = (chatId: string | undefined) => {
  const [messages, setMessages] = useState<Message[]>([]);

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
            payload.new as Message,
          ]);
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [chatId]);

  return messages;
};

export default useRealTimeMessages;
