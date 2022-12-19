import { useContext } from "react";
import { AgendamentoContext } from "../contexts/Agendamento/AgendamentoContext";

export const useAgendamento= () => {
    const context = useContext(AgendamentoContext);
    return context;
}