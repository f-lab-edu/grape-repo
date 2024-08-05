import { selectEmail } from '@/shared/api';

const checkUserNameExists = async (email: string) => {
  const { data, error } = await selectEmail(email);

  if (error) {
    console.log('fetchError', error);
  }

  return data?.[0]?.user_name;
};

export default checkUserNameExists;
