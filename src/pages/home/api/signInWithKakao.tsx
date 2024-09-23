import { handleError, supabase } from '@/shared';

const signInWithKakao = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: `${import.meta.env.VITE_BASE_URL}/chat`,
    },
  });

  handleError({ data, error });
};

export default signInWithKakao;
