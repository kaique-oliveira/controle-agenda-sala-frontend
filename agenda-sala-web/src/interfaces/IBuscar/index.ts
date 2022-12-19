export interface IBuscarUsuario{
    token: string;
    usuario: {
        id: number
        nome: string;
        email: string;
        tipo: string;
    }
};

export interface IBuscarSala{
    id: number;
    nome: string;
};

export interface IBuscarSetor{
    id: number;
    nome: string;
}

export interface IBuscarAgendamento {
    id: number;
    data: string;
    horaInicial: string;
    horaFinal: string;
    duracao: string;
    sala: {
        id: number;
        nome: string;
    };
    usuario: {
        id: number;
        nome: string;
        setor: {
            id: number;
            nome: string;
        };
    };
};