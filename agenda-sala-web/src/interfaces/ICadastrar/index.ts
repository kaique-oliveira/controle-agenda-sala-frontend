
export interface ICadastrarAgendamento {
    titulo: string;
    dataAgendamento: string;
    horaInicial: string;
    duracao: string;
    idSala: number;
    idUsuario: number;
};

export interface ICadastrarUsuario{
    id: number;
    nome: string;
    email: string;
    senha: string;
    tipo: string;
    setor: ICadastrarSetor;
}

export interface ICadastrarSetor{
    id: number;
    nome: string;
}

export interface ICadastrarSala{
    id: number;
    nome: string;
};