import { handleError, supabase } from '@/shared';

type MessageBodyType = {
  chat_id: string | undefined;
  user_id: string;
  body: string;
};

const sendChatMessage = async ({ chat_id, user_id, body }: MessageBodyType) =>
  supabase
    .from('messages')
    .insert([{ chat_id, user_id, body }])
    .then(handleError);

export default sendChatMessage;
