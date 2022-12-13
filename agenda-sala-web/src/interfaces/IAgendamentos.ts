
export interface IAgendamentos {
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
   
}