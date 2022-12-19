import { IBuscarSala, IBuscarUsuario } from "../IBuscar";

export interface IAuthContext{
    usuario: IBuscarUsuario | null;
    salas: IBuscarSala[];
    login: (email: string, senha: string) => Promise<void>;
    logout: () => void;
    validartoken: () => Promise<void>;
    isLoading: boolean;
}

export interface IRequireAuth{
    children: JSX.Element ;
}