import { IUsuario } from './IUsuario';

export interface IAuthContext{
    usuario: IUsuario | null;
    login: (email: string, senha: string) => Promise<boolean>;
    logout: () => void;
}