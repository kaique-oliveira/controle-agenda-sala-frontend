import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useApi } from "../../hooks/useApi";
import { FaHouseDamage, FaClock, FaHourglassStart, FaCalendarPlus, FaTrash} from "react-icons/fa";

import { Calendario } from '../../components/Calendario'
import {
  ContainerBody,
  ContainerMain,
  ContainerHeader,
  ContainerAside,
  ContainerCards,
  ContainerForm,
  Options
} from './styles';

import Button from "../../components/Button";
import InputHora from "../../components/InputHora";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { IAgendamento } from "../../interfaces/IAgendamento";
import InputSala from "../../components/InputSala";
import { useHome } from '../../hooks/useHome'
import { ISala } from "../../interfaces/ISala";


function HomePage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const api = useApi();
  const home = useHome();

  const [agendamentos, setAgendamentos] = useState<IAgendamento[]>([]);
  const [salas, setSalas] = useState<ISala[]>([]);
  const [minutos, setMinutos] = useState<number[]>([]);
  const [horas, setHoras] = useState<number[]>([]);
  const [duracoes, setDuracoes] = useState<number[]>([]);


  useEffect(() => {

    carregarAgendamentos();
    carregarSalas();
    setHoras(home.gerarHoras());
    setMinutos(home.gerarMinutos());
    setDuracoes(home.gerarDuracoes());

  }, []);


  const carregarSalas = async() => {
    const _salas: ISala[] = await api.buscarSalas();
    setSalas(_salas);
  };

  const carregarAgendamentos = async () => {
    const _agendamentos: IAgendamento[] = await api.buscarAgendamentos();
    if (_agendamentos) {
      setAgendamentos(_agendamentos);
    } 
  }

  const sair = () => {
    auth.logout();
    navigate('/');
  }

  return (
    <ContainerBody>
      <ContainerHeader>
       
        <Button
          color='#111111'         
          border='none'
          width={2.5}
          boxShadow='0 0 0'
          icon={<FaHouseDamage color='#C0C0C0' size={20}/>}
          onClick={() => navigate('/home')}
        />

        <Button
          color='#111111'         
          border='none'
          width={2.5}
          boxShadow='0 0 0'
          titulo="Sair"
          onClick={sair}
        />
      </ContainerHeader>

      <ContainerMain>    
        <ContainerAside>
          <InputSala
            titulo="Local:"
            salas={salas.map((s) => <Options key={s.id}>{ s.nome }</Options>)}
          />
          <Calendario />
          <ContainerForm>
            <InputHora
              horas={horas.map((h) => <Options key={h}>{h < 10 ? '0' + h : h}</Options>)}
              minutos={minutos.map((m) => <Options key={m}>{m < 10 ? '0' + m : m}</Options>)}
              titulo={'horário inicial:'}
              icon={<FaClock size={20} color={'#C0C0C0'}/>}
            />

            <InputHora
              horas={duracoes.map((d) => <Options key={d}>{d < 10 ? '0' + d : d}</Options>)}
              minutos={minutos.map((m) => <Options key={m}>{m < 10 ? '0' + m : m}</Options>)}
              titulo={'duração:'}
              icon={<FaHourglassStart size={20} color={'#C0C0C0'}/>}
            />

            <Button
                color='#0F0F0F'
                border='1px solid #080809'
                width={30}
                boxShadow='1px 1px 3px'
                titulo='Agendar' 
                icon={<FaCalendarPlus color={'#C0C0C0'} size={20} />}
            />

          </ContainerForm>    
      </ContainerAside>

      <ContainerCards>          
          {agendamentos && agendamentos.map((a) => {
           return (
            <Card key={a.id}
              titulo={` ${a.usuario.nome} - ${a.usuario.setor.nome}`}
              descricao={`${a.horaInicial.substring(11,16)}  -  ${a.horaFinal.substring(11,16)}  |  duração: ${a.duracao.substring(11,16)}`}
              button={
                <Button
                  color='#0D0D0E'
                  border='none'
                  width={30}
                  boxShadow='0 0 0'
                  icon={<FaTrash color='#C0C0C0' size={20} />}
                />}
            />
          );
          })}
      </ContainerCards>     
    </ContainerMain>
   </ContainerBody>
  )
}

export default HomePage;
