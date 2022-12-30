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

    const [horaInicio, setHoraInicio] = useState<string>('08');
    const [minutoInicio, setMinutoInicio] = useState<string>('00');
    const [horaDuracao, setHoraDuracao] = useState<string>('00');
    const [minutoDuracao, setMinutoDuracao] = useState<string>('00');

    const [agendamentoRecup, setAgendamentoRecup] = useState<IBuscarAgendamento>({} as IBuscarAgendamento);

    const criarAgendamento = async(agendamento : ICadastrarAgendamento) => {
        await api.cadastrarAgendamento(agendamento);
    } 
    
    const editarAgendamento = async(agendamento : ICadastrarAgendamento) => {
        await api.editarAgendamento(agendamento);
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

    const recuperarAgendamento = async (idAgendamento : number) => {
        setAgendamentoRecup(agendamentos.find(a => a.id == idAgendamento) as IBuscarAgendamento);
    }

    return (
        <AgendamentoContext.Provider 
        value={{ 
            idSala, 
            data, 
            agendamentos, 
            agendamentoRecup,
            horaInicio,
            setHoraInicio,
            minutoInicio,
            setMinutoInicio,
            horaDuracao,
            setHoraDuracao,
            minutoDuracao,
            setMinutoDuracao,
            criarAgendamento, 
            editarAgendamento,
            buscarAgendamentos, 
            deletarAgendamento, 
            recuperarAgendamento,
            setAgendamentoRecup
        }}>
            {children}
        </AgendamentoContext.Provider>
    );
}