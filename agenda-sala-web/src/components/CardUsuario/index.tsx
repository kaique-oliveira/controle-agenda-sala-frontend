import { FaTrash, FaUserEdit } from 'react-icons/fa'
import { ICardUsuario } from '../../interfaces/IComponents'
import NavButton from '../NavButton'
import { Body, Botoes, Conteudo, Descricao, Titulo } from './styles'

const CardUsuario = ({ usuario }: ICardUsuario) => {
  
  const recuperarDados = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.id);
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
          onClick={recuperarDados}
        />
        <NavButton id={usuario.id.toString()} icon={<FaTrash />} /> 
      </Botoes>
  </Body>
  )
}

export default CardUsuario