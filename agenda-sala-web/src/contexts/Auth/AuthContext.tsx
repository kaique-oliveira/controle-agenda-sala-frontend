import { createContext } from "react";
import { IAuthContext } from "../../interfaces/IContexts";


export const AuthContext = createContext<IAuthContext>(null!);