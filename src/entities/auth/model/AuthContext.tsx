import type { AuthContextType } from '@/shared';

import { createContext } from 'react';

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
