import React from 'react'
import { FaTrash, FaUserEdit } from 'react-icons/fa'
import { useAdmSetor } from '../../hooks/useAdmSetor'
import { ICardSetor } from '../../interfaces/IComponents'
import NavButton from '../NavButton'
import { Body, Botoes, Conteudo, Titulo } from './styles'

const CardSetor = ({setor} : ICardSetor) => {

  const { recuperarSetor, deletarSetor } = useAdmSetor();
  
  const recuperarDadosEditar = (event: React.MouseEvent<HTMLButtonElement>) => {
    recuperarSetor(parseInt(event.currentTarget.id));
  }

  const deletar = (event: React.MouseEvent<HTMLButtonElement>) => {
    deletarSetor(parseInt(event.currentTarget.id));
  }

  return (
    <Body>
      <Conteudo>
        <Titulo> {setor.nome} </Titulo>
      </Conteudo>
      <Botoes>
        <NavButton
          id={setor.id.toString()}
          icon={<FaUserEdit />}
          onClick={recuperarDadosEditar}
        />
        <NavButton
          id={setor.id.toString()}
          icon={<FaTrash />}
          onClick={deletar}
        />  
      </Botoes>
    </Body>
  )
}

export default CardSetor
