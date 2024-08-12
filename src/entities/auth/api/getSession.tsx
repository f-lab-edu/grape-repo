import { supabase } from '@/shared/api';

const getSession = async () => {
  const { data } = await supabase.auth.getSession();
  return data.session;
};

export default getSession;
