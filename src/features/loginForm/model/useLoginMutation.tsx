import { signInUser, useAuth } from '@/entities/auth';
import { checkUserNameExists } from '@/features/loginForm';
import type { OnErrorMutate } from '@/shared';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

const useLoginMutation = ({ onError }: OnErrorMutate) => {
  const navigate = useNavigate({ from: '/login' });
  const { updateUserNameStatus } = useAuth();

  const { mutate, isError } = useMutation({
    mutationFn: signInUser,
    onSuccess: async (data) => {
      const hasUserName = await checkUserNameExists(data?.user.email);

      if (!hasUserName) updateUserNameStatus(false);
      else navigate({ to: '/chat' });
    },

    onError,
  });

  return { mutate, isError };
};

export default useLoginMutation;
