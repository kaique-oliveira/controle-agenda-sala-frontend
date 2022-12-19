import FormCadastroUsuario from '../../components/FormCadastroUsuario'
import HeaderGlobal from '../../components/HeaderGlobal';
import { useAuth } from '../../hooks/useAuth'
import { Body } from './styles'

const Usuario = () => {
  const { usuario } = useAuth();

  return (
    <Body>
        {usuario ? <HeaderGlobal/> : null}
        <FormCadastroUsuario/>     
    </Body>
  )
}

export default Usuario