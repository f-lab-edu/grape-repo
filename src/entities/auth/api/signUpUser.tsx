import type { UserInfoProps } from '@/shared';
import { supabase } from '@/shared/api';

const signUpUser = async ({ email, password }: UserInfoProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  return data;
};

export default signUpUser;
