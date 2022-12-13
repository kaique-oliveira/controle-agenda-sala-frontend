import { FaHouseDamage } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import Button from '../Button'
import { ContainerHeader } from './styles'


const Header = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    
    const sair = () => {
        auth.logout();
        navigate('/');
      }
    

  return (
    <ContainerHeader>
       
    <Button
      color='#111111'         
      border='none'
      width={2.5}
      boxShadow='0 0 0'
      icon={<FaHouseDamage color='#C0C0C0' size={20}/>}
      onClick={() => navigate('/home')}
    />

    <Button
      color='#111111'         
      border='none'
      width={2.5}
      boxShadow='0 0 0'
      titulo="Sair"
      onClick={sair}
          />
    </ContainerHeader>
  )
}

export default Header