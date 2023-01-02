import FormAdmUsuario from '../../components/FormAdmUsuario'
import FormEditarPerfil from '../../components/FormEditarPerfil'
import HeaderGlobal from '../../components/HeaderGlobal'
import { Body, BodySection, HeaderSection, Section, Titulo } from './styles'

const Perfil = () => {
  return (
    <Body>
      <HeaderGlobal/>
      
      <Section>
        <HeaderSection>
        <Titulo>Editar Perfil</Titulo>
        </HeaderSection>

        <BodySection>
          <FormEditarPerfil/>
        </BodySection>
      </Section>
    </Body>
  )
}

export default Perfil
