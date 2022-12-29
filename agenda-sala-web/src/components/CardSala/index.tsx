import React from 'react'
import { FaTrash, FaUserEdit } from 'react-icons/fa'
import { useAdmSala } from '../../hooks/useAdmSala'
import { ICardSala } from '../../interfaces/IComponents'
import NavButton from '../NavButton'
import { Body, Botoes, Conteudo, Titulo } from './styles'

const CardSala = ({sala} : ICardSala) => {
    
    const { recuperarSala, deletarSala } = useAdmSala();
  
    const recuperarDadosEditar = (event: React.MouseEvent<HTMLButtonElement>) => {
      recuperarSala(parseInt(event.currentTarget.id));
    }
  
    const deletar = (event: React.MouseEvent<HTMLButtonElement>) => {
      deletarSala(parseInt(event.currentTarget.id));
    }

    return (
        <Body>
          <Conteudo>
            <Titulo> {sala.nome} </Titulo>
          </Conteudo>
          <Botoes>
            <NavButton
              id={sala.id.toString()}
              icon={<FaUserEdit />}
              onClick={recuperarDadosEditar}
            />
            <NavButton
              id={sala.id.toString()}
              icon={<FaTrash/>}
              onClick={deletar}
            />  
          </Botoes>
        </Body>
      )
}

export default CardSala
