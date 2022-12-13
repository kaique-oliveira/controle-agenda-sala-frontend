import { useEffect, useState } from "react";
import { AgendamentoContext } from "./AgendamentoContext"
import { useApi } from "../../hooks/useApi";
import { IAgendamentos } from "../../interfaces/IAgendamentos";
import { IAgendamento } from "../../interfaces/IAgendamento";


export const AgendamentoProvider = ({ children }: { children: JSX.Element }) => {
    
    const [idSala, setIdSala] = useState<number>(1);
    const [data, setData] = useState<Date>(new Date());
    const [agendamentos, setAgendamentos] = useState<IAgendamentos[]>([]);
    const api = useApi();


    useEffect(() => { 
        buscarAgendamentos();
    }, [api, idSala, data]);

    const agendar = async (agendamento : IAgendamento) => {

        await api.cadastrarAgendamento(agendamento);

    }

    const buscarAgendamentos = async() => {
        const _agendamentos: IAgendamentos[] = await api.buscarAgendamentos(idSala, data.toJSON());

        if (_agendamentos) {
            setAgendamentos(_agendamentos);
        } 
    }

    const deletarAgendamento = async (idAgendamento : number) => {

        await api.deletarAgendamento(idAgendamento);
    }

    return (
        <AgendamentoContext.Provider value={{idSala, setIdSala, data, setData , agendar, buscarAgendamentos, agendamentos, deletarAgendamento}}>
            {children}
        </AgendamentoContext.Provider>
    );
}