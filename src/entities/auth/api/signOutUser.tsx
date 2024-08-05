import { supabase } from '@/shared/api';

const signOutUser = async () => {
  await supabase.auth.signOut();
};

export default signOutUser;
