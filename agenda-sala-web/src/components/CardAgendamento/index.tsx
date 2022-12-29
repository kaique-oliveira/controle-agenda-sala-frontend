import { useAgendamento } from "../../hooks/useAgendamento";
import { Body, Botoes, Conteudo, Descricao, Titulo } from "./styles"
import { ICardAgendamento } from "../../interfaces/IComponents";
import NavButton from "../NavButton";
import { FaPen, FaTrash } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";

const CardAgendamento = ({agendamento }: ICardAgendamento) => {
  const agend = useAgendamento();
  const { usuario } = useAuth();

  const recuperarDadosEditar = (event: React.MouseEvent<HTMLButtonElement>) => {
    agend.recuperarAgendamento(parseInt(event.currentTarget.id));
  }

  const deletarAgendamento = async(event: React.MouseEvent<HTMLButtonElement>) => {
    await agend.deletarAgendamento(parseInt(event.currentTarget.id));
}

  return (
    <Body>
      <Conteudo>
          <Titulo> {`${agendamento.usuario.nome} - ${agendamento.usuario.setor.nome}`} </Titulo>
          <Descricao> 
            {  
              `
              ${agendamento.titulo} \u00A0  - \u00A0 das \u00A0
              ${agendamento.horaInicial.substring(11, 16)} \u00A0  às \u00A0 
              ${agendamento.horaFinal.substring(11, 16)}  \u00A0 \u00A0 
              ( 
                ${
                  agendamento.duracao.substring(11,13) == '00' ?
                  agendamento.duracao.substring(14, 16) + ' minutos'
                  : agendamento.duracao.substring(11, 13) == '01' ? 
                      agendamento.duracao.substring(11, 13) + ' hora e ' + agendamento.duracao.substring(14, 16) + ' minutos'
                  : agendamento.duracao.substring(11, 13) + ' horas e ' + agendamento.duracao.substring(14, 16) + ' minutos'}
              )`
            }      
          </Descricao>
      </Conteudo>
      {usuario && usuario.id == agendamento.usuario.id
        ? 
        <Botoes>
          <NavButton 
            id={agendamento.id.toString()} 
            icon={<FaPen/>} 
            // onClick={deletarAgendamento}
          /> 

          <NavButton 
            id={agendamento.id.toString()} 
            icon={<FaTrash />} 
            onClick={deletarAgendamento}
          /> 
        </Botoes>
        : null}
     
    </Body>
  )
}

export default CardAgendamento

