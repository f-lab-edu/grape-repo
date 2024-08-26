import type { ChatContextType } from '@/shared';
import { createContext } from 'react';

const AuthContext = createContext<ChatContextType | null>(null);

export default AuthContext;
