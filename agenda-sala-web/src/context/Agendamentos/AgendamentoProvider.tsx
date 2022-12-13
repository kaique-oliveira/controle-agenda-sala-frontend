import { useState } from "react";
import { AgendamentoContext } from "./AgendamentoContext"
import { useApi } from "../../hooks/useApi";
import { IAgendamentos } from "../../interfaces/IAgendamentos";
import { IAgendamento } from "../../interfaces/IAgendamento";


export const AgendamentoProvider = ({ children }: { children: JSX.Element }) => {
    
    const [idSala, setIdSala] = useState<number>(1);
    const [data, setData] = useState<Date>(new Date());
    const [agendamentos, setAgendamentos] = useState<IAgendamentos[]>([]);
    const api = useApi();


    const agendar = async (agendamento : IAgendamento) => {

        await api.persistirAgendamento(agendamento);

    }

    const buscarAgendamentos = async(idSala : number, data: Date) => {
        const _agendamentos: IAgendamentos[] = await api.buscarAgendamentos(idSala, data.toJSON());

        if (_agendamentos) {
            setAgendamentos(_agendamentos);
        } 

        return agendamentos;
    }


    return (
        <AgendamentoContext.Provider value={{ agendar, buscarAgendamentos }}>
            {children}
        </AgendamentoContext.Provider>
    );
}