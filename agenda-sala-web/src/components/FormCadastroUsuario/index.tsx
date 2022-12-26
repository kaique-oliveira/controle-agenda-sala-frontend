import { useEffect, useState } from 'react';
import { FaEnvelope, FaLock, FaNetworkWired, FaSave, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import imgUsuario from '../../assets/users.svg';
import { useApi } from '../../hooks/useApi';
import { useAuth } from '../../hooks/useAuth';
import { IBuscarSetor } from '../../interfaces/IBuscar';
import { ICadastrarUsuario } from '../../interfaces/ICadastrar';
import ActionButton from '../ActionButton';
import CheckAdmin from '../CheckAdmin';
import { Imagem } from '../LogoScreen';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import { Body, Form, Inputs } from './styles'

const FormCadastroUsuario = () => {
  const { usuario } = useAuth();
  const api = useApi();
  const navigate = useNavigate();

  const [focoNome, setFocoNome] = useState<boolean>(false);
  const [focoEmail, setFocoEmail] = useState<boolean>(false);
  const [focoSenha, setFocoSenha] = useState<boolean>(false);
  const [focoSetor, setFocoSetor] = useState<boolean>(false);

  const [id] = useState<number>(0);
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [tipo, setTipo] = useState<string>('usuario')
  const [setor, setSetor] = useState<IBuscarSetor>({} as IBuscarSetor);
  const [setores, setSetores] = useState<IBuscarSetor []>([]);

  useEffect(() => {
    buscarSetores();
  }, []);


  const buscarSetores = async() => {
    const response = await api.buscarSetores() as IBuscarSetor[]; 

    if(response){
        setSetores(response);
    }
  }

  const cadastrarUsuario = async (event: any) => {
    event.preventDefault();
    if(nome && email && senha && setor.nome && setor.id){ 
        const dadosUsuario : ICadastrarUsuario = {
            id: id,
            nome: nome,
            email: email,
            senha: senha,
            tipo: tipo,
            setor: setor
        }
            
        const response = await api.cadastrarUsuario(dadosUsuario);

        if(response){
            alert(response);
            navigate('/home');
        }
    }else{
        alert("Preencha todos os campos!")
    }
  }

  return (
    <Body>
          <Form>
            <Imagem src={imgUsuario} />
            <Inputs>

              <TextInput
                isFocus={focoNome}
                icon={<FaUserAlt />}
                tipo="text"
                placeholder="seu nome"
                onFocus={() => setFocoNome(true)}
                onBlur={() => setFocoNome(false)}
                onChange={n => setNome(n.target.value)}
                value={nome}
              />
              
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

              <SelectInput
                icon={<FaNetworkWired/>}
                titulo='setor'                
                isFocus={focoSetor}
                onFocus={() => setFocoSetor(true)}
                onBlur={() => setFocoSetor(false)}
                onChange={(s) => setSetor({id: parseInt(s.target.value), nome: 'nome'})}  
              >
                <option value={0}>Selecione uma sala</option>
                {setores.map((s) => <option key={s.id} value={s.id}>{ s.nome }</option>)}
                
              </SelectInput>
              
              {usuario
                ? <CheckAdmin
                  titulo="Admin"
                  onChange={e =>  e.currentTarget.checked 
                    ? setTipo('admin')
                    : setTipo('usuario')}
                /> : null 
              }
              
            </Inputs>
            <ActionButton
              icon={ <FaSave/> }
              titulo="salvar"
              onClick={cadastrarUsuario}
            />
        </Form>
    </Body>
  )
}

export default FormCadastroUsuario