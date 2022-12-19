import { useAgendamento } from '../../hooks/useAgendamento'
import CardAgendamento from '../../components/CardAgendamento'
import { Body } from "./styles"

const ListaAgendamentos = () => {
    const { agendamentos } = useAgendamento();
    
  return (
    <Body>
        {
            agendamentos.length != 0 ? agendamentos.map((a) => {
                return (
                <CardAgendamento
                    key={a.id}
                    idAgendamento={a.id}
                    idUsuario ={a.usuario.id}
                    titulo={`${a.usuario.nome} - ${a.usuario.setor.nome}`}
                    descricao={
                    `${a.horaInicial.substring(11, 16)} \u00A0  às \u00A0 
                    ${a.horaFinal.substring(11, 16)}  \u00A0 \u00A0 
                    ( ${
                    a.duracao.substring(11,13) == '00' ?
                    a.duracao.substring(14, 16) + ' minutos'
                    : a.duracao.substring(11, 13) == '01' ? 
                        a.duracao.substring(11, 13) + ' hora e ' + a.duracao.substring(14, 16) + ' minutos'
                    : a.duracao.substring(11, 13) + ' horas e ' + a.duracao.substring(14, 16) + ' minutos'
                    } )`}
                />
                );
            }) : null
        }
    </Body>
  )
}

export default ListaAgendamentos