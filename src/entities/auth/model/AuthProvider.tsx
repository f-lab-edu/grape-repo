import { AuthContext } from '@/entities/auth';
import { supabase } from '@/shared/api';
import type { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isUserNameEmpty, setIsUserNameEmpty] = useState<boolean>(false);

  const updateUserNameStatus = (userNameExists: boolean) => {
    setIsUserNameEmpty(userNameExists);
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isUserNameEmpty, updateUserNameStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
