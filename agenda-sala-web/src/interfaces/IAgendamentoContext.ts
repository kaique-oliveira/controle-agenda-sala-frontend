import { SetStateAction } from "react";
import { IAgendamento } from "./IAgendamento";
import { IAgendamentos } from "./IAgendamentos";


export interface IAgendamentoContext{
    idSala: number;
    setIdSala: (idSala: number) => void;
    data: Date;
    setData: (sata: Date) => void;
    agendar: (agendamento: IAgendamento) => Promise<void>;
    buscarAgendamentos: () => Promise<IAgendamentos[]>
}