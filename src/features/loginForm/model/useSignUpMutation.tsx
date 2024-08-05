import { signUpUser } from '@/entities/auth';
import type { UserInfoProps } from '@/shared';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

const useSignUpMutation = () => {
  const navigate = useNavigate({ from: '/login' });

  const { mutate, isError } = useMutation({
    mutationFn: async (userInfo: UserInfoProps) => {
      return await signUpUser(userInfo);
    },
    onSuccess: async (data) => {
      console.log('인증 성공', data);
      navigate({ to: '/profile' });
    },

    onError: (error) => {
      console.log('인증 실패', error);
    },
  });

  return { mutate, isError };
};

export default useSignUpMutation;
