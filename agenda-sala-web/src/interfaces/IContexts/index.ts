import { IBuscarAgendamento, IBuscarSala, IBuscarUsuario } from "../IBuscar";
import { ICadastrarAgendamento, ICadastrarUsuario } from "../ICadastrar";


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

export interface IAgendamentoContext{
    agendamentos: IBuscarAgendamento[];
    criarAgendamento: (agendamento: ICadastrarAgendamento) => Promise<void>;
    buscarAgendamentos: (idSala: number, data: Date) => Promise<void>
    deletarAgendamento: (idAgendamento: number) => Promise<void>;
}

export interface IAdmUsuario{
    usuarios: IBuscarUsuario[];
    usuarioRecup: ICadastrarUsuario;
    setUsuarioRecup: (usuario : ICadastrarUsuario) => void;
    buscarUsuarios: () => Promise<void>;
    editarUsuario: (usuario :  ICadastrarUsuario) => Promise<void>;
    deletarUsuario: (idUsuario: number) => Promise<void>;
    recuperarUsuario: (idUsuario : number) => Promise<void>;
}
