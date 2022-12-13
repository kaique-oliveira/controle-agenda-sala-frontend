import { SetStateAction } from "react";
import { IAgendamento } from "./IAgendamento";
import { IAgendamentos } from "./IAgendamentos";


export interface IAgendamentoContext{
    idSala: number;
    setIdSala: (idSala: number) => void;
    data: Date;
    agendamentos: IAgendamentos[];
    setData: (sata: Date) => void;
    agendar: (agendamento: IAgendamento) => Promise<void>;
    buscarAgendamentos: () => Promise<void>
    deletarAgendamento: (idAgendmaento: number) => Promise<void>;
}