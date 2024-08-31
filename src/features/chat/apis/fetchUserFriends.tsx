import { handleError, supabase } from '@/shared';

const fetchUserFriends = async (userId: string | null) => {
  const { data, error } = await supabase
    .from('friends')
    .select('friend_id, friend_name')
    .eq('user_id', userId);

  handleError(error);

  return data;
};

export default fetchUserFriends;
