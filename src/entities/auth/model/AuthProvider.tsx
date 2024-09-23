import { AuthContext } from '@/entities/auth';
import { type SessionType, supabase } from '@/shared';
import { useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<SessionType>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/chat')) {
      supabase.auth.getSession().then(async ({ data: { session } }) => {
        if (session) {
          setSession(session);
          setUserId(session?.user.id);
        }
      });
    }
  }, [location]);

  return (
    <AuthContext.Provider
      value={{ session, userName, userId, setSession, setUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
