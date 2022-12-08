import { createContext } from 'react';
import { IAuthContext } from '../../interfaces/IAuthContext';

export const AuthContext = createContext<IAuthContext>(null!);