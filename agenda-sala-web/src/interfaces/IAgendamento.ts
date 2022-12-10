import { ISala } from "./ISala";
import { ISetor } from "./ISetor";
import { IUsuario } from "./IUsuario";

export interface IAgendamento {
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
        email: string;
        senha: string;
        tipo: string;
        setor: {
            id: number;
            nome: string;
        };
    };
   
}