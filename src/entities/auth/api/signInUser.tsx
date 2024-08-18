import type { UserInfo } from '@/shared';
import { supabase } from '@/shared/api';

const signInUser = async ({ email, password }: UserInfo) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error.message;

  return data;
};

export default signInUser;
