import { FaTrash, FaUserEdit } from 'react-icons/fa'
import { useAdmUsuario } from '../../hooks/useAdmUsuario'
import { ICardUsuario } from '../../interfaces/IComponents'
import NavButton from '../NavButton'
import { Body, Botoes, Conteudo, Descricao, Titulo } from './styles'

const CardUsuario = ({ usuario }: ICardUsuario) => {
  const { recuperarUsuario, deletarUsuario } = useAdmUsuario();
  
  const recuperarDadosEditar = (event: React.MouseEvent<HTMLButtonElement>) => {
    recuperarUsuario(parseInt(event.currentTarget.id));
  }

  const deletar = (event: React.MouseEvent<HTMLButtonElement>) => {
    deletarUsuario(parseInt(event.currentTarget.id));
  }

  return (
    <Body>
      <Conteudo>
        <Titulo> {`${usuario.nome} - ${usuario.setor.nome}`} </Titulo>
        <Descricao> { `${usuario.email}` } </Descricao>
      </Conteudo>
      <Botoes>
        <NavButton
          id={usuario.id.toString()}
          icon={<FaUserEdit />}
          onClick={recuperarDadosEditar}
        />
        <NavButton
          id={usuario.id.toString()}
          icon={<FaTrash />}
          onClick={deletar}
        />  
      </Botoes>
  </Body>
  )
}

export default CardUsuario