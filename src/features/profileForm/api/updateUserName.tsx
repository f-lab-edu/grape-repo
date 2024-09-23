import { handleError, supabase } from '@/shared';

const updateUserName = async ({ userName }: { userName: string }) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) throw userError;

  return await supabase
    .from('users')
    .update({ user_name: userName })
    .eq('id', user.id)
    .then(handleError);
};

export default updateUserName;
