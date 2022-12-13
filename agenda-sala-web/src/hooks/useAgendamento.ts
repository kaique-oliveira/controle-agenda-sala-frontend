import { useContext } from "react";
import { AgendamentoContext } from "../context/Agendamentos/AgendamentoContext";

export const useAgendamento= () => {
    const context = useContext(AgendamentoContext);
    return context;
}