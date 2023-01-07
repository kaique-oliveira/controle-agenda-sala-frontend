import { IBuscarAgendamento, IBuscarSala, IBuscarSetor, IBuscarUsuario } from "../IBuscar";
import { ICadastrarAgendamento, ICadastrarSala, ICadastrarSetor, ICadastrarUsuario } from "../ICadastrar";


export interface IAuthContext{
    usuario: IBuscarUsuario | null;
    salas: IBuscarSala[];
    buscarSalas: () => Promise<void>;
    login: (email: string, senha: string) => Promise<void>;
    logout: () => void;
    validartoken: () => Promise<void>;
    isLoading: boolean;
}

export interface IRequireAuth{
    children: JSX.Element ;
}

export interface IAgendamentoContext{
    idSala: number;
    data: Date;
    agendamentos: IBuscarAgendamento[];
    agendamentoRecup: IBuscarAgendamento;
    horaInicio: string;
    minutoInicio: string;
    horaDuracao: string;
    minutoDuracao: string;
    setAgendamentoRecup: (agendamento : IBuscarAgendamento) => void;
    setHoraInicio: (hi : string) => void;
    setMinutoInicio: (mi : string) => void;
    setHoraDuracao: (hd : string) => void;
    setMinutoDuracao: (md : string) => void;
    criarAgendamento: (agendamento: ICadastrarAgendamento) => Promise<void>;
    editarAgendamento: (agendamento: ICadastrarAgendamento) => Promise<void>;
    buscarAgendamentos: (idSala: number, data: Date) => Promise<void>
    deletarAgendamento: (idAgendamento: number) => Promise<void>;
    recuperarAgendamento: (idAgendamento: number) => Promise<void>;
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

export interface IAdmSetor{
    setores: IBuscarSetor[];
    setorRecup: ICadastrarSetor;
    setSetorRecup: (setor : ICadastrarSetor) => void;
    buscarSetores: () => Promise<void>;
    editarSetor: (setor :  ICadastrarSetor) => Promise<void>;
    deletarSetor: (idSetor: number) => Promise<void>;
    recuperarSetor: (idSetor : number) => Promise<void>;
}

export interface IAdmSala{
    salas: IBuscarSala[];
    salaRecup: ICadastrarSala;
    setSalaRecup: (sala : ICadastrarSala) => void;
    buscarSalas: () => Promise<void>;
    editarSala: (sala:  ICadastrarSala) => Promise<void>;
    deletarSala: (idSala: number) => Promise<void>;
    recuperarSala: (idSala : number) => Promise<void>;
}
