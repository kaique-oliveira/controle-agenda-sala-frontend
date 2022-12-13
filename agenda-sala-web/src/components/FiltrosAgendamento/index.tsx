import { useEffect, useState } from "react";
import { useAgendamento } from "../../hooks/useAgendamento";
import { useApi } from "../../hooks/useApi";
import { ISala } from "../../interfaces/ISala";
import { Calendario } from "../Calendario";
import InputSala from "../InputSala";

export const FiltrosAgendamentos = () => {

    const [salas, setSalas] = useState<ISala[]>([]);
    const api = useApi();
    const agend = useAgendamento();

    useEffect(() => {
        carregarSalas();
      }, []);
    
      const carregarSalas = async() => {
        const _salas: [] = await api.buscarSalas();
        setSalas(_salas);
      };

    return (     
        <>
            <InputSala
                titulo="Local:"
                salas={salas}
                onChange={(s) => agend.setIdSala(parseInt(s.target.value))}
                value={agend.idSala}
            />

            <Calendario
                onChange={agend.setData}
                value={agend.data}
            />
        </>   
    );
}