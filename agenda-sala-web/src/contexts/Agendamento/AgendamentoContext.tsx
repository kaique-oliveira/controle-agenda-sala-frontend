import { createContext } from "react";
import { IAgendamentoContext } from "../../interfaces/IContexts";


export const AgendamentoContext = createContext<IAgendamentoContext>(null!);