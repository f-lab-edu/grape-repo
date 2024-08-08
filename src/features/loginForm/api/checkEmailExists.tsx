import { selectEmail } from '@/shared/api';

const checkEmailExists = async (email: string) => {
  const { data, error } = await selectEmail(email);

  if (error) {
    console.log('fetchError', error);
  }

  return data?.length;
};

export default checkEmailExists;
