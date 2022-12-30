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
import SelectInputDuracao from "../SelectInputDuracao";
import { IBuscarAgendamento } from "../../interfaces/IBuscar";

const FormAgendamento = () => {

  const [carregaHoras, setCarregaHoras] = useState<number[]>([]);
  const [carregaMinutos, setCarregaMinutos] = useState<number[]>([]);
  const [carregaDuracao, setCarregaDuracao] = useState<number[]>([]);

  const [focoSala, setFocoSala] = useState<boolean>(false);
  const [focoTitulo, setFocoTitulo] = useState<boolean>(false);
  const [focoInicio, setFocoInicio] = useState<boolean>(false);
  const [focoDuracao, setFocoDuracao] = useState<boolean>(false);
  const [idSala, setIdSala] = useState<number>(0);
  const [titulo, setTitulo] = useState<string>('');
  const [data, setData] = useState<Date>(new Date());

  const { 
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
    agendamentoRecup,
    setAgendamentoRecup} = useAgendamento();
  const horarios = useHorarios();
  const auth = useAuth();

  useEffect(() => {
    setCarregaHoras(horarios.gerarHoras());
    setCarregaMinutos(horarios.gerarMinutos());
    setCarregaDuracao(horarios.gerarDuracoes());
  }, []);

  useEffect(() => {
    if(agendamentoRecup.id){
      recuperarDados();
    }
  }, [agendamentoRecup]);

  useEffect(() => {
    buscar();
  }, [idSala, data]);


  const buscar = async () => {   
    await buscarAgendamentos(idSala!, data);
  }


  const agendar = async() => {
    
    if ( idSala && titulo.length > 1 && horaDuracao != '00' ||  idSala && titulo.length > 1 && minutoDuracao != '00') {

      const dadosAgendamento: ICadastrarAgendamento = {
        id: agendamentoRecup.id | 0,
        titulo: titulo,
        dataAgendamento: data.toJSON(),
        horaInicial: (new Date(`${new Date().toDateString()} ${horaInicio}:${minutoInicio}:00`)).toJSON(),
        duracao: (new Date(`${new Date().toDateString()} ${horaDuracao}:${minutoDuracao}:00`)).toJSON(),
        idSala: idSala!,
        idUsuario: (auth.usuario?.id!)
      }

      if(agendamentoRecup.id == 0 || agendamentoRecup.id == null){
        await criarAgendamento(dadosAgendamento).then(() => {
          buscar();
          limparCampos();
        });  
      }else{
        editarAgendamento(dadosAgendamento).then(() => {
          buscar();
          limparCampos();
        });
      }

      
    }
    else {
      alert('Seleciona a hora inicial a duração e um titulo corretamente.')
    }

  }

  const recuperarDados = () => {
    setTitulo(agendamentoRecup.titulo);
    setHoraInicio(agendamentoRecup.horaInicial.substring(11, 13));
    setMinutoInicio(agendamentoRecup.horaInicial.substring(14, 16));
    setHoraDuracao(agendamentoRecup.duracao.substring(11, 13));
    setMinutoDuracao(agendamentoRecup.duracao.substring(14, 16));
  }

  const limparCampos = () => {
    setTitulo('');
    setHoraInicio('08');
    setMinutoInicio('00');
    setHoraDuracao('00');
    setMinutoDuracao('00');
    setAgendamentoRecup({} as IBuscarAgendamento);
  }

  const handleForm = (e : any) => {
    e.preventDefault();
  }

  return (
    <Body onSubmit={handleForm}>
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
        onChange={(t) => setTitulo(t.target.value)}
        value={titulo}
      >
        <option value={''}>Selecione um titulo</option>
        <option value={'Conferência'}>Conferência</option>
        <option value={'Reunião'}>Reunião</option>
        <option value={'Treinamento'}>Treinamento</option>
      </SelectInput>
      
      <SelectInputHora
        icon={<FaClock />}
        titulo='inicio'
        isFocus={focoInicio}
        horas={carregaHoras}
        minutos={carregaMinutos}
        onFocus={() => setFocoInicio(true)}
        onBlur={() => setFocoInicio(false)}
      />

      <SelectInputDuracao
        icon={<FaHourglassStart />}
        titulo='duração'
        isFocus={focoDuracao}
        horas={carregaDuracao}
        minutos={carregaMinutos}
        onFocus={() => setFocoDuracao(true)}
        onBlur={() => setFocoDuracao(false)}
      />
      
      <ActionButton
        icon={ <FaRegCalendarPlus/> }
        titulo="agendar"
        onClick={agendar}
      />
    </Body>    
  )
}

export default FormAgendamento