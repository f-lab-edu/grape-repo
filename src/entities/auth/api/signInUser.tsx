import type { UserInfoProps } from '@/shared';
import { supabase } from '@/shared/api';

const signInUser = async ({ email, password }: UserInfoProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
};

export default signInUser;
