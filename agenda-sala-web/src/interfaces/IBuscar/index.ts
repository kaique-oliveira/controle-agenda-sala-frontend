export interface IValidarToken{
    token: string;
    usuario: IBuscarUsuario;
};

export interface IBuscarUsuario{
    id: number
    nome: string;
    email: string;
    tipo: string;
    setor: IBuscarSetor; 
}


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