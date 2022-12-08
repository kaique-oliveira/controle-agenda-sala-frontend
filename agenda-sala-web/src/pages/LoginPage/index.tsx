import { IoAtOutline, IoLockClosed } from "react-icons/io5";
import InputText from '../../components/InputText'
import Button from "../../components/Button";
import logo from '../../assets/calendar.gif'
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
      } else {
        alert('Não deu certo!');
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
              icon={<IoAtOutline size={30} color={'#696969'}/>}
              onChange={e => setEmail(e.target.value)}
            />
            <InputText 
              placheholder="Infome sua senha"
              tipoText="password" 
              icon={<IoLockClosed size={25} color={'#696969'}/>}
              onChange={s => setSenha(s.target.value)}
            />
          </ContainerInputs>
        
          <ConatainerBotoes>
            <Button titulo='Entrar' onClick={handleLogin}/>
            <p>Cadastre-se</p>
          </ConatainerBotoes>

        </ContainerForm>
      </ContainerBody>


      {/* <ContainerFooter>
        <p>Cadastre-se</p>
      </ContainerFooter> */}
    </Container>
  )
}

export default LoginPage
