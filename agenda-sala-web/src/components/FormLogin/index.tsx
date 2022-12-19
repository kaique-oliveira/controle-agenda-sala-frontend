import TextInput from "../TextInput"
import { Body, Form, Inputs } from "./styles"
import { FaEnvelope, FaLock, FaKey, FaUserPlus } from "react-icons/fa";
import ActionButton from "../ActionButton";
import { Imagem } from "../LogoScreen";
import imgLogin from '../../assets/login.svg';
import NavButton from "../NavButton";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [focoEmail, setFocoEmail] = useState<boolean>(false);
  const [focoSenha, setFocoSenha] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async(event : any) => { 
    event.preventDefault();
    if (email && senha) {
      await auth.login(email, senha).then(() => auth.validartoken());    
    }
  }

  return (
    <Body>
      <Form onSubmit={fazerLogin}>
        <Imagem src={imgLogin} />
        <Inputs>
          <TextInput
              isFocus={focoEmail}
              icon={<FaEnvelope />}
              tipo="email"
              placeholder="seu e-mail"
              onFocus={() => setFocoEmail(true)}
              onBlur={() => setFocoEmail(false)}
              onChange={e => setEmail(e.target.value)}
          />
    
          <TextInput
            isFocus={focoSenha}
            icon={<FaLock />}
            tipo="password"
            placeholder="sua senha"
            onFocus={() => setFocoSenha(true)}
            onBlur={() => setFocoSenha(false)}
            onChange={s => setSenha(s.target.value)}
          />      
        </Inputs>
        
          <ActionButton
            icon={ <FaKey/> }
            titulo="entrar"
          />

          <NavButton
            icon={ <FaUserPlus/> }
            titulo="cadastrar-se"
            onClick={() => navigate('/cadastre-se')}
          />
        </Form>
    </Body>
  )
}

export default FormLogin