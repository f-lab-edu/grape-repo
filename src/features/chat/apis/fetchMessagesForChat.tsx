import { handleError, supabase } from '@/shared';

const fetchMessagesForChat = async (chatId: string | undefined) =>
  supabase
    .from('messages')
    .select('*')
    .eq('chat_id', chatId)
    .order('created_at', { ascending: true })
    .then(handleError);

export default fetchMessagesForChat;
