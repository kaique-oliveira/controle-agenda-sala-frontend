import { useEffect, useState } from 'react'
import CardUsuario from '../../components/CardUsuario'
import FormAdmUsuario from '../../components/FormAdmUsuario'
import HeaderGlobal from '../../components/HeaderGlobal'
import { useAdmUsuario } from '../../hooks/useAdmUsuario'
import { Body, Cards, Section } from './styles'

const Administracao = () => {
  const { buscarUsuarios, usuarios} = useAdmUsuario();

  useEffect(() => {
    buscarUsuarios();
  }, [])
  
  return (
    <Body>
      <HeaderGlobal/>
      
      <Section>
        <FormAdmUsuario/>
        <Cards>
          {usuarios.length != 0 ? usuarios.map((u) => {
            return (
              <CardUsuario key={u.id} usuario={ u } />
          )}) : null}
        </Cards>
      </Section>
      
      
      <Section>
      
      </Section>
      
      <Section>
      
      </Section>
    </Body>
  )
}

export default Administracao