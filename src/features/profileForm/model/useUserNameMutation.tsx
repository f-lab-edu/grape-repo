import { updateUserName } from '@/features/profileForm';

import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

const useUserNameMutation = () => {
  const navigate = useNavigate();

  const { mutate, isError } = useMutation({
    mutationFn: updateUserName,
    onSuccess: () => navigate({ to: '/chat' }),
  });

  return { mutate, isError };
};

export default useUserNameMutation;
