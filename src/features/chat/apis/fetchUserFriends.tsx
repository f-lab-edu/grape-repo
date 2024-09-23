import { handleError, supabase } from '@/shared';

const fetchUserFriends = async (userId: string | null) =>
  supabase
    .from('friends')
    .select('friend_id, friend_name')
    .eq('user_id', userId)
    .then(handleError);

export default fetchUserFriends;
