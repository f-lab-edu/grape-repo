import { signUpUser, useAuth } from '@/entities/auth';
import { checkUserNameExists } from '@/features/loginForm';
import { useMutation } from '@tanstack/react-query';

const useSignUpMutation = () => {
  const { updateUserNameStatus } = useAuth();
  const { mutate, isError } = useMutation({
    mutationFn: signUpUser,
    onSuccess: async (data) => {
      const hasUserName = await checkUserNameExists(data?.user?.email);
      if (!hasUserName) updateUserNameStatus(false);
    },
  });

  return { mutate, isError };
};

export default useSignUpMutation;
