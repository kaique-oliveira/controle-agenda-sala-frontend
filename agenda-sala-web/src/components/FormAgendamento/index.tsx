import { useEffect, useState } from "react";
import { FaBuilding, FaAudioDescription, FaClock, FaHourglassStart, FaRegCalendarPlus } from 'react-icons/fa'
import Calendario from "../Calendario";
import SelectInput from "../SelectInput"
import SelectInputHora from "../SelectInputHora";
import { Body } from "./styles";
import { useHorarios } from "../../hooks/useHorarios";
import ActionButton from "../ActionButton";
import { useAgendamento } from "../../hooks/useAgendamento";
import { ICadastrarAgendamento } from "../../interfaces/ICadastrar";
import { useAuth } from "../../hooks/useAuth";

const FormAgendamento = () => {

  const [carregaHoras, setCarregaHoras] = useState<number[]>([]);
  const [carregaMinutos, setCarregaMinutos] = useState<number[]>([]);
  const [carregaDuracao, setCarregaDuracao] = useState<number[]>([]);

  const [focoSala, setFocoSala] = useState<boolean>(false);
  const [focoTitulo, setFocoTitulo] = useState<boolean>(false);
  const [focoInicio, setFocoInicio] = useState<boolean>(false);
  const [focoDuracao, setFocoDuracao] = useState<boolean>(false);

  const [data, setData] = useState<Date>(new Date());
  const [idSala, setIdSala] = useState<number>();
  const [horaIncio, setHoraInicio] = useState<string>('08');
  const [minutoIncio, setMinutoInicio] = useState<string>('00');
  const [horaDuracao, setHoraDuracao] = useState<string>('00');
  const [minutoDuracao, setMinutoDuracao] = useState<string>();

  const agendamento = useAgendamento();
  const horarios = useHorarios();
  const auth = useAuth();

  useEffect(() => {
      setCarregaHoras(horarios.gerarHoras());
      setCarregaMinutos(horarios.gerarMinutos());
      setCarregaDuracao(horarios.gerarDuracoes());
  }, []);

  useEffect(() => {
    buscarAgendamentos();
}, [idSala, data]);


  const buscarAgendamentos = async () => {   
    await agendamento.buscarAgendamentos(idSala!, data);
  }

  //@ts-ignore
  const criarAgendamento = async(e) => {
    e.preventDefault()
    if (horaIncio && minutoIncio && horaDuracao && minutoDuracao) {

      const dadosAgendamento: ICadastrarAgendamento = {
        dataAgendamento: data.toJSON(),
        horaInicial: (new Date(`${new Date().toDateString()} ${horaIncio}:${minutoIncio}:00`)).toJSON(),
        duracao: (new Date(`${new Date().toDateString()} ${horaDuracao}:${minutoDuracao}:00`)).toJSON(),
        idSala: idSala!,
        idUsuario: (auth.usuario?.usuario.id!)
      }

      await agendamento.criarAgendamento(dadosAgendamento);
      buscarAgendamentos();
    }
    else {
      alert('Seleciona a hora inicial e a duração corretamente.')
    }

  }

  //@ts-ignore
  const handleHora = h => {
    switch (h.target.id) {
      case 'selectHora':
        setHoraInicio(h.target.value);
        break;
      case 'selectMinuto':
        setMinutoInicio(h.target.value)
        break;
    }
  }

  //@ts-ignore
  const handleDuracao = d => {
    switch (d.target.id) {
      case 'selectHora':
        setHoraDuracao(d.target.value);
        break;
      case 'selectMinuto':
        setMinutoDuracao(d.target.value)
        break;
    }
  }



  return (
    <Body>
      <SelectInput
        icon={<FaBuilding/>}
        titulo='salas'
        isFocus={focoSala}
        onFocus={() => setFocoSala(true)}
        onBlur={() => setFocoSala(false)}
        onChange={(s) => setIdSala(parseInt(s.target.value))}
      >
          <option value={0}>Selecione uma sala</option>
          {auth.salas.map((s) => <option key={s.id} value={s.id}>{ s.nome }</option>)}
      </SelectInput>

      <Calendario
        onChange={setData}
        value={data}
      />

      <SelectInput
        icon={<FaAudioDescription/>}
        titulo='titulo'
        isFocus={focoTitulo}
        onFocus={() => setFocoTitulo(true)}
        onBlur={() => setFocoTitulo(false)}
        
      >
        <option value={0}>Selecione um titulo</option>
        <option value={0}>Conferência</option>
        <option value={0}>Reunião</option>
        <option value={0}>Treinamento</option>
      </SelectInput>
      
      <SelectInputHora
        icon={<FaClock />}
        titulo='inicio'
        isFocus={focoInicio}
        horas={carregaHoras}
        minutos={carregaMinutos}
        onFocus={() => setFocoInicio(true)}
        onBlur={() => setFocoInicio(false)}
        onChange={handleHora}
      />

      <SelectInputHora
        icon={<FaHourglassStart />}
        titulo='duração'
        isFocus={focoDuracao}
        horas={carregaDuracao}
        minutos={carregaMinutos}
        onFocus={() => setFocoDuracao(true)}
        onBlur={() => setFocoDuracao(false)}
        onChange={handleDuracao}
      />
      
      <ActionButton
        icon={ <FaRegCalendarPlus/> }
        titulo="agendar"
        onClick={criarAgendamento}
      />

    </Body>    
  )
}

export default FormAgendamento