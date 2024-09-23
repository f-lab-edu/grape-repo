import { handleError, selectEmail } from '@/shared';

const checkUserNameExists = async (email: string | undefined) =>
  selectEmail(email).then(handleError);

export default checkUserNameExists;
