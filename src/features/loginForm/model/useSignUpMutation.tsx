import { signUpUser, useAuth } from '@/entities/auth';
import { checkUserNameExists } from '@/features/loginForm';
import { useMutation } from '@tanstack/react-query';

const useSignUpMutation = () => {
  const { handleUserName, handleSession } = useAuth();
  const { mutate, isError } = useMutation({
    mutationFn: signUpUser,
    onSuccess: async (data) => {
      handleSession(data.session);

      const userName = await checkUserNameExists(data?.user?.email);
      if (userName) handleUserName(userName);
    },
  });

  return { mutate, isError };
};

export default useSignUpMutation;
