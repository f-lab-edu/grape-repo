import { AuthContext } from '@/entities/auth';
import type { SessionType } from '@/shared';
import { useState } from 'react';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<SessionType>(null);
  const [userName, setUserName] = useState<string | null>(null);

  const handleUserName = (username: string) => {
    setUserName(username);
  };

  const handleSession = (data: SessionType) => {
    setSession(data);
  };

  return (
    <AuthContext.Provider
      value={{ session, userName, handleUserName, handleSession }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
