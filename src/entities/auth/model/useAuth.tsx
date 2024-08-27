import { AuthContext } from '@/entities/auth';
import { assert } from '@/shared';
import { useContext } from 'react';

const useAuth = () => {
  const context = useContext(AuthContext);
  assert(context, 'useSession must be used within a SessionProvider');

  return context;
};

export default useAuth;
