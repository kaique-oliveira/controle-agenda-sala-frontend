import { createContext } from "react";
import { IAdmUsuario } from "../../interfaces/IContexts";

export const AdmUsuarioContext = createContext<IAdmUsuario>(null!);