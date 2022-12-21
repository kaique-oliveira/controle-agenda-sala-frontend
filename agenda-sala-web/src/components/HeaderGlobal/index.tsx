import NavButton from '../NavButton'
import { Header, Nav } from './styles'
import  { FaCog, FaHome, FaPowerOff } from 'react-icons/fa'
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
          <NavButton
            icon={<FaCog />}
            onClick={() => navigate('/configuracoes')}
          />
          <NavButton
            icon={<FaPowerOff/>}
            onClick={sair}
          />
      </Nav>
    </Header>
  )
}

export default HeaderGlobal