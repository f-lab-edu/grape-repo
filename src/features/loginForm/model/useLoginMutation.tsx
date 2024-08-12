import { signInUser } from '@/entities/auth';
import { checkUserNameExists } from '@/features/loginForm';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

type LoginMutationProps = { onError: () => void };

const useLoginMutation = ({ onError }: LoginMutationProps) => {
  const navigate = useNavigate({ from: '/login' });

  const { mutate, isError } = useMutation({
    mutationFn: signInUser,
    onSuccess: async (data) => {
      const isUserNameExists = await checkUserNameExists(
        data?.user.email as string,
      );

      if (!isUserNameExists) navigate({ to: '/profile' });
      else navigate({ to: '/chat' });
    },

    onError: (error) => {
      console.log('로그인실패', error);
      onError();
    },
  });

  return { mutate, isError };
};

export default useLoginMutation;
