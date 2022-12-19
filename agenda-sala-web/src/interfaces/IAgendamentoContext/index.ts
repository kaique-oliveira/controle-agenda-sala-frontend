import { IBuscarAgendamento } from "../IBuscar";
import { ICadastrarAgendamento } from "../ICadastrar";

export interface IAgendamentoContext{
    agendamentos: IBuscarAgendamento[];
    criarAgendamento: (agendamento: ICadastrarAgendamento) => Promise<void>;
    buscarAgendamentos: (idSala: number, data: Date) => Promise<void>
    deletarAgendamento: (idAgendamento: number) => Promise<void>;
}