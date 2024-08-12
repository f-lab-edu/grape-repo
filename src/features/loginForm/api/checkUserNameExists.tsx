import { selectEmail } from '@/shared/api';

const checkUserNameExists = async (email: string) => {
  const { data, error } = await selectEmail(email);

  if (error) throw new Error(error.message);

  return data?.[0]?.user_name;
};

export default checkUserNameExists;
