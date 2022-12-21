import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { IBuscarAgendamento } from "../../interfaces/IBuscar";
import { ICadastrarAgendamento } from "../../interfaces/ICadastrar";
import { AgendamentoContext } from "./AgendamentoContext";


export const AgendamentoProvider = ({ children }: { children: JSX.Element }) => {
    const api = useApi();
    const [agendamentos, setAgendamentos] = useState<IBuscarAgendamento[]>([]);
    const [idSala, setIdSala] = useState<number>(0);
    const [data, setData] = useState<Date>(new Date());

    const criarAgendamento = async(agendamento : ICadastrarAgendamento) => {
        await api.cadastrarAgendamento(agendamento);
    }   

    const buscarAgendamentos = async (idSala: number, data: Date) => {
        setIdSala(idSala);
        setData(data);
        const response = await api.buscarAgendamentos(idSala, data.toJSON()) as IBuscarAgendamento[];
        if (response) {
            setAgendamentos(response);
        }    
    }

    const deletarAgendamento = async (id : number) => {
        await api.deletarAgendamento(id).then(() => buscarAgendamentos(idSala, data));
    }

    return (
        <AgendamentoContext.Provider value={{ agendamentos, criarAgendamento, buscarAgendamentos, deletarAgendamento }}>
            {children}
        </AgendamentoContext.Provider>
    );
}