import { useEffect} from 'react'
import CardSetor from '../../components/CardSetor'
import CardUsuario from '../../components/CardUsuario'
import FormAdmSetor from '../../components/FormAdmSetor'
import FormAdmUsuario from '../../components/FormAdmUsuario'
import HeaderGlobal from '../../components/HeaderGlobal'
import { useAdmSetor } from '../../hooks/useAdmSetor'
import { useAdmUsuario } from '../../hooks/useAdmUsuario'
import { Body, BodySection, Cards, HeaderSection, Section, Titulo } from './styles'

const Administracao = () => {
  const { buscarUsuarios, usuarios} = useAdmUsuario();
  const {buscarSetores, setores} = useAdmSetor();

  useEffect(() => {
    buscarUsuarios();
    buscarSetores();
  }, [])
  
  return (
    <Body>
      <HeaderGlobal/>
      
      <Section>
        <HeaderSection>
        <Titulo>Gerênciar usuários</Titulo>
        </HeaderSection>

        <BodySection>
          <FormAdmUsuario/>
          <Cards>
            {usuarios.length != 0 ? usuarios.map((u) => {
              return (
                <CardUsuario key={u.id} usuario={ u } />
            )}) : null}
          </Cards>
        </BodySection>
      </Section>
      
      
      <Section>
        <HeaderSection>
          <Titulo>Gerênciar setores</Titulo>
        </HeaderSection>

        <BodySection>
          <FormAdmSetor/>
          <Cards>
          {setores.length != 0 ? setores.map((s) => {
              return (
                <CardSetor key={s.id} setor={ s } />
            )}) : null}
        
          </Cards>       
        </BodySection>
      </Section>
      
      <Section>
      
      </Section>
    </Body>
  )
}

export default Administracao