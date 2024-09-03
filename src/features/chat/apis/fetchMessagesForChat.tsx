import { type MessageType, handleError, supabase } from '@/shared';

const fetchMessagesForChat = async (chatId: string | undefined) => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('chat_id', chatId)
    .order('created_at', { ascending: true });

  handleError(error);

  return data as MessageType[];
};

export default fetchMessagesForChat;
