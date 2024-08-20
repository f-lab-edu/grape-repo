import { handleError, selectEmail } from '@/shared';

const checkUserNameExists = async (email: string | undefined) => {
  const { data, error } = await selectEmail(email);

  handleError(error);

  return data?.[0]?.user_name;
};

export default checkUserNameExists;
