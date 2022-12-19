
export interface ICadastrarAgendamento {
    dataAgendamento: string;
    horaInicial: string;
    duracao: string;
    idSala: number;
    idUsuario: number;
};

export interface ICadastrarUSuario{
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