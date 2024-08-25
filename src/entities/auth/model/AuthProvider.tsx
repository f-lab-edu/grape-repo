import { AuthContext } from '@/entities/auth';
import type { SessionType } from '@/shared';
import { useState } from 'react';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<SessionType>(null);
  const [userName, setUserName] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{ session, userName, setSession, setUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
