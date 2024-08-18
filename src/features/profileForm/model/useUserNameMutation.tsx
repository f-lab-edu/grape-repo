import { updateUserName } from '@/features/profileForm';
import type { OnErrorMutate } from '@/shared';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

const useUserNameMutation = ({ onError }: OnErrorMutate) => {
  const navigate = useNavigate();

  const { mutate, isError } = useMutation({
    mutationFn: updateUserName,
    onSuccess: () => navigate({ to: '/chat' }),
    onError,
  });

  return { mutate, isError };
};

export default useUserNameMutation;
