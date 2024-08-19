import { signUpUser, useAuth } from '@/entities/auth';
import { checkUserNameExists } from '@/features/loginForm';
import { useMutation } from '@tanstack/react-query';

const useSignUpMutation = () => {
  const { hasUserNameHandler } = useAuth();
  const { mutate, isError } = useMutation({
    mutationFn: signUpUser,
    onSuccess: async (data) => {
      const hasUserName = await checkUserNameExists(data?.user?.email);
      if (!hasUserName) hasUserNameHandler(false);
    },
  });

  return { mutate, isError };
};

export default useSignUpMutation;
