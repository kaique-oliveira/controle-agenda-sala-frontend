import { useEffect, useState } from 'react'
import { FaCalendarPlus, FaClock, FaHourglassStart, FaTrash } from 'react-icons/fa'
import { useHome } from '../../hooks/useHome'
import Button from '../Button'
import Card from '../Card'
import InputHora from '../InputHora'
import InputDuracao from '../InputDuracao'
import { ContainerAside, ContainerCards, ContainerForm } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { IAgendamento } from '../../interfaces/IAgendamento'
import { useAgendamento } from '../../hooks/useAgendamento'
import { FiltrosAgendamentos } from '../FiltrosAgendamento'

const Agendamentos = () => {


  const home = useHome();
  const agend = useAgendamento();
  const { usuario } = useAuth();

  
  const [minutos, setMinutos] = useState<number[]>([]);
  const [horas, setHoras] = useState<number[]>([]);
  const [duracoes, setDuracoes] = useState<number[]>([]);
  const [horaInicial, setHoraInicial] = useState('07');
  const [minutoInicial, setMinutoInicial] = useState('00');
  const [horaDuracao, setHoraDuracao] = useState('00');
  const [minutoDuracao, setMinutoDuracao] = useState(null);
  

  useEffect(() => {
      setHoras(home.gerarHoras());
      setMinutos(home.gerarMinutos());
      setDuracoes(home.gerarDuracoes());
  }, []);
  
  
  const agendar = async () => {
    if (horaInicial && minutoInicial && horaDuracao && minutoDuracao) {
      const horaIn = new Date(`${new Date().toDateString()} ${horaInicial}:${minutoInicial}:00`);
      const duracao = new Date(`${new Date().toDateString()} ${horaDuracao}:${minutoDuracao}:00`);

      
      const dadosAgendamento : IAgendamento = {
        dataAgendamento: agend.data.toJSON(),
        horaInicial: horaIn.toJSON(),
        duracao: duracao.toJSON(),
        idSala: agend.idSala,
        idUsuario:  usuario?.usuario.id || 0
      }
      
      agend.agendar(dadosAgendamento);
    }
    else {
      alert('Seleciona a hora inicial e a duração corretamente.')
    }
  }

  //@ts-ignore
  const deletarAgendamento = async (event) => {
        await agend.deletarAgendamento(parseInt(event.nativeEvent.path[2].id));
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


    return (
    <>
    <ContainerAside>
  
        <FiltrosAgendamentos/>

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
                width={40}
                boxShadow='1px 1px 3px'
                titulo='Agendar' 
              icon={<FaCalendarPlus color={'#C0C0C0'} size={20} />}
              onClick={agendar}
            />
        </ContainerForm>    
      </ContainerAside>

       <ContainerCards>          
        {agend.agendamentos && agend.agendamentos.map((a) => {
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