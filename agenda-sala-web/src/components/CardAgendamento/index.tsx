import { useAgendamento } from "../../hooks/useAgendamento";
import { Body, Conteudo, Descricao, Titulo } from "./styles"
import { ICardAgendamento } from "../../interfaces/IComponents";
import NavButton from "../NavButton";
import { FaTrash } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";

const CardAgendamento = ({ titulo, descricao, idAgendamento, idUsuario }: ICardAgendamento) => {
  const agend = useAgendamento();
  const { usuario } = useAuth();

  const deletarAgendamento = async(event: React.MouseEvent<HTMLButtonElement>) => {
    await agend.deletarAgendamento(parseInt(event.currentTarget.id));
}

  return (
    <Body>
      <Conteudo>
          <Titulo> {titulo} </Titulo>
          <Descricao> { descricao } </Descricao>
      </Conteudo>
      {usuario?.usuario && usuario?.usuario.id == idUsuario
        ? <NavButton id={idAgendamento.toString()} icon={<FaTrash />} onClick={deletarAgendamento} /> 
        : null}
     
    </Body>
  )
}

export default CardAgendamento

