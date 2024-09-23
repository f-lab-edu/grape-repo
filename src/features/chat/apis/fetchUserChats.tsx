import { handleError, supabase } from '@/shared';

const fetchUserChats = async (userId: string | undefined) =>
  supabase
    .from('chat_list_view')
    .select('*')
    .eq('user_id', userId)
    .then(handleError);

export default fetchUserChats;
