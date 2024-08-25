import { handleError, supabase } from '@/shared';

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

  handleError(updateError);

  return data;
};

export default updateUserName;
