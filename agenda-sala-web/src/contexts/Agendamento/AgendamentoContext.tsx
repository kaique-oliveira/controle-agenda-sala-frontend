import { createContext } from "react";
import { IAgendamentoContext } from "../../interfaces/IAgendamentoContext";

export const AgendamentoContext = createContext<IAgendamentoContext>(null!);