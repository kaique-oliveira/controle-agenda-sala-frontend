import { useEffect, useState } from 'react'
import { FaCalendarPlus, FaClock, FaHourglassStart, FaTrash } from 'react-icons/fa'
import { useApi } from '../../hooks/useApi'
import { useHome } from '../../hooks/useHome'
import { IAgendamentos } from '../../interfaces/IAgendamentos'
import { ISala } from '../../interfaces/ISala'
import Button from '../Button'
import { Calendario } from '../Calendario'
import Card from '../Card'
import InputHora from '../InputHora'
import InputDuracao from '../InputDuracao'
import InputSala from '../InputSala'
import { ContainerAside, ContainerCards, ContainerForm } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { IAgendaSala } from '../../interfaces/IAgendamento'

const Agendamentos = () => {

    const api = useApi();
    const home = useHome();
    const {usuario} = useAuth();
    const [idSala, setIdSala] = useState<number>(1);
    const [salas, setSalas] = useState<ISala[]>([]);
    const [minutos, setMinutos] = useState<number[]>([]);
    const [horas, setHoras] = useState<number[]>([]);
    const [duracoes, setDuracoes] = useState<number[]>([]);
    const [data, setData] = useState<string>(new Date().toISOString());
    const [agendamentos, setAgendamentos] = useState<IAgendamentos[]>([]);
  
  
  const [horaInicial, setHoraInicial] = useState('07');
  const [minutoInicial, setMinutoInicial] = useState('00');
  const [horaDuracao, setHoraDuracao] = useState('00');
  const [minutoDuracao, setMinutoDuracao] = useState(null);

    useEffect(() => {
        carregarSalas();
        carregarAgendamentos(data, idSala);
      }, [data, idSala]);
    
      useEffect(() => {
        setHoras(home.gerarHoras());
        setMinutos(home.gerarMinutos());
        setDuracoes(home.gerarDuracoes());
      }, []);
    
    
      const carregarSalas = async() => {
        const _salas: [] = await api.buscarSalas();
        setSalas(_salas);
     
      };
    
      const carregarAgendamentos = async (data: string, idSala:number) => {
        const _agendamentos: IAgendamentos[] = await api.buscarAgendamentos(data, idSala);

        if (_agendamentos) {
          setAgendamentos(_agendamentos);
        } 
      }

    //@ts-ignore
    const onchangeData = d => {
        const dataRecuperada = d.toISOString();
        setData(dataRecuperada);
  }
  
  //@ts-ignore
  const handleHora = h => {
    switch (h.target.id) {
      case 'selectHora':
        setHoraInicial(h.target.value);
        break;
      case 'selectMinuto':
        setMinutoInicial(h.target.value)
        break;
    }
  }

    //@ts-ignore
    const handleDuracao = d => {
      switch (d.target.id) {
        case 'selectHoraDuracao':
          setHoraDuracao(d.target.value);
          break;
        case 'selectMinutoDuracao':
          setMinutoDuracao(d.target.value)
          break;
      }
    }

  const fazerAgendamento = async () => {
    if (horaInicial && minutoInicial && horaDuracao && minutoDuracao) {
      const hra = new Date(`${new Date().toLocaleDateString()} ${horaInicial}:${minutoInicial}:00`);
      const dr = new Date(`${new Date().toLocaleDateString()} ${horaDuracao}:${minutoDuracao}:00`);


      const agendamento: IAgendaSala = {
        dataAgendamento: data,
        horaInicial: hra.toJSON(),
        duracao: dr.toJSON(),
        idSala: idSala,
        idUsuario:  usuario?.usuario.id || 0
      }

      

      await api.persistirAgendamento(agendamento);

      setTimeout(() => {
        carregarAgendamentos(data, idSala);
      }, 2000);
    }
    else {
      alert('Seleciona a hora inicial e a duração corretamente.')
    }
  }

  //@ts-ignore
  const deletarAgendamento = async (event) => {

      await api.deletarAgendamento(event.nativeEvent.path[2].id);

      setTimeout(() => {
        carregarAgendamentos(data, idSala);
      }, 1000);
    
  }


    return (
    <>
    <ContainerAside>
        <InputSala
        titulo="Local:"
        salas={salas}
        onChange={(s) => setIdSala(parseInt(s.target.value))}
        value={idSala}
        />

        <Calendario
        onChange={onchangeData}
        value={new Date(data)}
        />
      

        <ContainerForm>
            <InputHora
                horas={horas}
                minutos={minutos}
                titulo={'horário inicial:'}
                icon={<FaClock size={20} color={'#C0C0C0'} />}
                onChange={handleHora}
            />

            <InputDuracao
                horas={duracoes}
                minutos={minutos}
                titulo={'duração:'}
                icon={<FaHourglassStart size={20} color={'#C0C0C0'} />}
                onChange={handleDuracao}
            />

            <Button
                color='#0F0F0F'
                border='1px solid #080809'
                width={30}
                boxShadow='1px 1px 3px'
                titulo='Agendar' 
              icon={<FaCalendarPlus color={'#C0C0C0'} size={20} />}
              onClick={fazerAgendamento}
            />
        </ContainerForm>    
      </ContainerAside>

       <ContainerCards>          
        {agendamentos && agendamentos.map((a) => {
          return (
          <Card key={a.id}
            titulo={` ${a.usuario.nome} - ${a.usuario.setor.nome}`}
            descricao={`${a.horaInicial.substring(11,16)}  -  ${a.horaFinal.substring(11,16)}  |  duração: ${a.duracao.substring(11,16)}`}
            button={ usuario?.usuario.id == a.usuario.id ?
              <Button
                id={a.id.toString()}
                color='#0D0D0E'
                border='none'
                width={30}
                boxShadow='0 0 0'
                icon={<FaTrash color='#C0C0C0' size={20} />}
                onClick={deletarAgendamento}
              /> : ''}
          />
        );
        })}
     </ContainerCards>     
    </>
  )
}

export default Agendamentos