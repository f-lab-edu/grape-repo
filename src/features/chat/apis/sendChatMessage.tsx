import { handleError, supabase } from '@/shared';

type MessageBodyType = {
  chat_id: string | undefined;
  user_id: string;
  body: string;
};

const sendChatMessage = async ({ chat_id, user_id, body }: MessageBodyType) => {
  const { error } = await supabase
    .from('messages')
    .insert([{ chat_id, user_id, body }]);

  handleError(error);
};

export default sendChatMessage;
