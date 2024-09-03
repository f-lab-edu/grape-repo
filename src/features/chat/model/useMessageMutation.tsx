import { handleError } from '@/shared';
import { useMutation } from '@tanstack/react-query';
import sendChatMessage from '../apis/sendChatMessage';

const useMessageMutation = () => {
  const { mutate, isError } = useMutation({
    mutationFn: sendChatMessage,
    onError: (error) => handleError(error),
  });

  return { mutate, isError };
};

export default useMessageMutation;
