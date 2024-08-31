import { handleError, supabase } from '@/shared';

const sendChatMessage = async (
  chatId: string | undefined,
  userId: string,
  body: string,
) => {
  const { error } = await supabase
    .from('messages')
    .insert([{ chat_id: chatId, user_id: userId, body }]);

  handleError(error);
};

export default sendChatMessage;
