import { type UserInfo, handleError, supabase } from '@/shared';

const signInUser = async ({ email, password }: UserInfo) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  handleError(error);

  return data;
};

export default signInUser;
