import { selectEmail } from '@/shared';

const fetchUserName = async (email: string | undefined) => {
  const data = await selectEmail(email);

  if (data) {
    return data[0].user_name;
  }
};

export default fetchUserName;
