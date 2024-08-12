import { signUpUser } from '@/entities/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

const useSignUpMutation = () => {
  const navigate = useNavigate({ from: '/login' });

  const { mutate, isError } = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      navigate({ to: '/profile' });
    },

    // onError: (error) => {},
  });

  return { mutate, isError };
};

export default useSignUpMutation;
