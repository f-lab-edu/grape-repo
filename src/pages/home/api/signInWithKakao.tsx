import { supabase } from '@/shared/api';

const signInWithKakao = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: `${import.meta.env.VITE_BASE_URL}/chat`,
    },
  });

  if (error) throw new Error(error.message);
};

export default signInWithKakao;
