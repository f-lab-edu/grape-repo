import { supabase } from '@/shared/api';

const updateUserName = async ({ userName }: { userName: string }) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) throw userError;

  const { data, error: updateError } = await supabase
    .from('users')
    .update({ user_name: userName })
    .eq('id', user.id);

  if (updateError) throw new Error(updateError.message);

  return data;
};

export default updateUserName;
