import { IoAtOutline, IoLockClosed, IoCalendarClearOutline } from "react-icons/io5";
import InputText from '../../components/InputText'
import Button from "../../components/Button";
import logo from '../../assets/calendar.gif'
import { useLogin } from "../../context/ContextLogin";
import { useState } from "react";
import { 
  Container, 
  ConatainerBotoes,
  ContainerBody, 
  ContainerInputs,
  ContainerForm,
  Imagem
} from './styles';


interface IDadosLogin{
  email: string;
  senha: string;
}

function LoginPage() {

  const { fazerLogin } = useLogin();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handlerLogin() {
      if (email && senha) {
          const dados: IDadosLogin = {
              email: email,
              senha: senha,
          }

          const res = await fazerLogin(dados);
      } else {
          alert('Ops, os campos devem ser informados!')
      }
  }

  return (

    <Container>   
      {/* <ContainerHeader>

      </ContainerHeader> */}
      

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
            <Button titulo='Entrar' onClick={handlerLogin}/>
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
