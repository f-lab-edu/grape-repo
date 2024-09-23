import { type UserInfo, handleError, supabase } from '@/shared';

const signUpUser = async ({ email, password }: UserInfo) =>
  supabase.auth
    .signUp({
      email,
      password,
    })
    .then(handleError);

export default signUpUser;
