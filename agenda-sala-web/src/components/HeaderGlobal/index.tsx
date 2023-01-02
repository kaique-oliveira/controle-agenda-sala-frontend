import NavButton from '../NavButton'
import { Header, Nav } from './styles'
import  { FaCog, FaHome, FaPowerOff, FaUserEdit } from 'react-icons/fa'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const HeaderGlobal = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const sair = () => {
      auth.logout();
  }

  return (
    <Header>
      <Nav>
        <NavButton
          icon={<FaHome />}
          onClick={() => navigate('/home')}
        />
      </Nav>
        
      <Nav>
        {auth.usuario?.tipo == 'admin' ?
          <NavButton
            icon={<FaCog />}
            onClick={() => navigate('/administracao')}
          />
          : 
          <NavButton
            icon={<FaUserEdit/>}
            onClick={() => navigate('/editar/perfil')}
          />  
        }
          <NavButton
            icon={<FaPowerOff/>}
            onClick={sair}
          />
      </Nav>
    </Header>
  )
}

export default HeaderGlobal