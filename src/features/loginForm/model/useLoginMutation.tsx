import { signInUser, useAuth } from '@/entities/auth';
import type { UserInfo } from '@/shared';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import type { UseFormSetError } from 'react-hook-form';
import { fetchUserName } from '@/features/loginForm';

const useLoginMutation = (setError: UseFormSetError<UserInfo>) => {
  const navigate = useNavigate({ from: '/login' });

  const { setUserName } = useAuth();
  const { mutate, isError } = useMutation({
    mutationFn: signInUser,
    onSuccess: async (data) => {
      const userName = await fetchUserName(data?.user?.email);

      if (userName) {
        setUserName(userName);
        navigate({ to: '/chat' });
      }
    },
    onError: () => {
      setError('password', {
        type: 'manual',
        message: '비밀번호가 틀렸습니다',
      });
    },
  });

  return { mutate, isError };
};

export default useLoginMutation;
