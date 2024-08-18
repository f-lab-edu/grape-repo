import { AuthContext } from '@/entities/auth';
import { supabase } from '@/shared/api';
import type { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [hasUserName, setHasUserName] = useState<boolean>(true);

  const hasUserNameHandler = (userNameExists: boolean) => {
    setHasUserName(userNameExists);
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, hasUserName, hasUserNameHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
