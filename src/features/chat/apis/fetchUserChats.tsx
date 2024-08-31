import { handleError, supabase } from '@/shared';

const fetchUserChats = async (userId: string | null) => {
  const { data, error } = await supabase
    .from('chat_list_view')
    .select('*')
    .eq('user_id', userId);

  handleError(error?.message);

  return data;
};

export default fetchUserChats;
