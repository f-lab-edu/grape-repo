import { selectEmail } from '@/shared/api';

const checkEmailExists = async (email: string) => {
  const { data, error } = await selectEmail(email);

  if (error) throw new Error(error.message);

  return data?.length;
};

export default checkEmailExists;
