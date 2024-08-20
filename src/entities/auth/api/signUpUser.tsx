import { type UserInfo, handleError, supabase } from '@/shared';

const signUpUser = async ({ email, password }: UserInfo) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  handleError(error);

  return data;
};

export default signUpUser;
