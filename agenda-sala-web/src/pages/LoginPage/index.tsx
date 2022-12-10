import { FaEnvelope, FaLock, FaKey } from "react-icons/fa";
import InputText from '../../components/InputText'
import Button from "../../components/Button";
import logo from '../../assets/calendar.svg'
import { useState } from "react";
import { 
  Container, 
  ConatainerBotoes,
  ContainerBody, 
  ContainerInputs,
  ContainerForm,
  Imagem
} from './styles';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";



function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    if (email && senha) {
      const isLogado = await auth.login(email, senha);

      if (isLogado) {
        navigate('/home');
      }
    }
  }

  return (

    <Container>   
      <ContainerBody>
        <ContainerForm>
          <Imagem src={logo}/>
          <ContainerInputs>
            <InputText
              placheholder="Infome seu e-mail interfocus"
              tipoText="email" 
              icon={<FaEnvelope size={20} color={'#C0C0C0'}/>}
              onChange={e => setEmail(e.target.value)}
            />
            <InputText 
              placheholder="Infome sua senha"
              tipoText="password" 
              icon={<FaLock size={20} color={'#C0C0C0'}/>}
              onChange={s => setSenha(s.target.value)}
            />
          </ContainerInputs>
        
          <ConatainerBotoes>
            <Button
              color='#0F0F0F'
              border='1px solid #080809; '
              width={25}
              boxShadow='1px 1px 3px'
              titulo='Entrar' onClick={handleLogin}
              icon={<FaKey color={'#C0C0C0'} size={20} />}
            />
          </ConatainerBotoes>

        </ContainerForm>
      </ContainerBody>
    </Container>
  )
}

export default LoginPage
