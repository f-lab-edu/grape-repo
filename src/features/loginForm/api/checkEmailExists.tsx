import { handleError, selectEmail } from '@/shared';

const checkEmailExists = async (email: string) =>
  selectEmail(email).then(handleError);

export default checkEmailExists;
