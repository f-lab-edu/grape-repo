import { handleError, selectEmail } from '@/shared';

const checkEmailExists = async (email: string) => {
  const { data, error } = await selectEmail(email);

  handleError(error);

  return data?.length;
};

export default checkEmailExists;
