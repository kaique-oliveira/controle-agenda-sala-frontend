import { useEffect, useState } from 'react'
import CardUsuario from '../../components/CardUsuario'
import FormCadastroUsuario from '../../components/FormCadastroUsuario'
import HeaderGlobal from '../../components/HeaderGlobal'
import { useApi } from '../../hooks/useApi'
import { IBuscarUsuario } from '../../interfaces/IBuscar'
import { Body, Cards, Section } from './styles'

const Administracao = () => {
  const api = useApi();
  const [usuarios, setUsuarios] = useState<IBuscarUsuario[]>([]);

  useEffect(() => {
    buscarUsuarios();
  }, [])
  
  const buscarUsuarios = async () => {
    const response = await api.buscarUsuarios();
    if (response) {
      setUsuarios(response);
    }
  }

  return (
    <Body>
        <HeaderGlobal/>
        <Section>
        <FormCadastroUsuario />
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