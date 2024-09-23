import { signUpUser, useAuth } from '@/entities/auth';
import { fetchUserName } from '@/features/loginForm';
import { useMutation } from '@tanstack/react-query';

const useSignUpMutation = () => {
  const { setUserName } = useAuth();
  const { mutate, isError } = useMutation({
    mutationFn: signUpUser,
    onSuccess: async (data) => {
      const userName = await fetchUserName(data?.user?.email);
      if (userName) setUserName(userName);
    },
  });

  return { mutate, isError };
};

export default useSignUpMutation;
