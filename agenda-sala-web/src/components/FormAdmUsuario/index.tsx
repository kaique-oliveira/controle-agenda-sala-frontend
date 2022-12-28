import { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaNetworkWired, FaSave, FaTimes, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAdmUsuario } from "../../hooks/useAdmUsuario";
import { useApi } from "../../hooks/useApi";
import { useAuth } from "../../hooks/useAuth";
import { IBuscarSetor } from "../../interfaces/IBuscar";
import { ICadastrarUsuario } from "../../interfaces/ICadastrar";
import ActionButton from "../ActionButton";
import CheckAdmin from "../CheckAdmin";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import { Body, Buttons, Form, Inputs } from "./styles";


const FormAdmUsuario = () => {

  const { usuario } = useAuth();
  const api = useApi();
  const admUsuario = useAdmUsuario();

  const [focoNome, setFocoNome] = useState<boolean>(false);
  const [focoEmail, setFocoEmail] = useState<boolean>(false);
  const [focoSenha, setFocoSenha] = useState<boolean>(false);
  const [focoSetor, setFocoSetor] = useState<boolean>(false);

  const [id, setId] = useState<number>(0);
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [tipo, setTipo] = useState<string>('usuario')
  const [setor, setSetor] = useState<IBuscarSetor>({} as IBuscarSetor);
  const [estadoSetor, setEstadoSetor] = useState(0);
  const [setores, setSetores] = useState<IBuscarSetor[]>([]);
  var checkbox = document.querySelector('#tipo');

  useEffect(() => {
    buscarSetores();
  }, []);

  useEffect(() => {
    if (admUsuario.usuarioRecup.id) {
      recuperarDados();
    }
  }, [admUsuario.usuarioRecup]);


  const buscarSetores = async() => {
    const response = await api.buscarSetores() as IBuscarSetor[]; 

    if(response){
        setSetores(response);
    }
  }

  const handlerSave = async () => {
    if(nome && email && senha && setor.nome && setor.id){ 
        const dadosUsuario : ICadastrarUsuario = {
            id: id,
            nome: nome,
            email: email,
            senha: senha,
            tipo: tipo,
            setor: setor
      }
      
      if (dadosUsuario.id == 0) {
        const response = await api.cadastrarUsuario(dadosUsuario);

        if (response) {
          alert(response);
          admUsuario.buscarUsuarios();
          limparCampos();
        }
      } else {
        const response = await api.editarUsuario(dadosUsuario);

        if (response) {
          alert(response);
          admUsuario.buscarUsuarios();
          limparCampos();
        }
      }
            
    }else{
      alert("Preencha todos os campos!")
    }
  }
    
  const recuperarDados = () => {
      setId(admUsuario.usuarioRecup.id);
      setNome(admUsuario.usuarioRecup.nome);
      setEmail(admUsuario.usuarioRecup.email);
      setSenha(admUsuario.usuarioRecup.senha);
      setSetor(admUsuario.usuarioRecup.setor);
      setEstadoSetor(admUsuario.usuarioRecup.setor.id);
      
      if (admUsuario.usuarioRecup.tipo == 'admin') {
        //@ts-ignore
        checkbox.checked = true
      } else {
        //@ts-ignore
        checkbox.checked = false;
      } 
  }

  const limparCampos = () => {
      setId(0);
      setNome('');
      setEmail('');
      setSenha('');
      setSetor(null!);
      setEstadoSetor(0);
      //@ts-ignore
      checkbox.checked = false;
      admUsuario.setUsuarioRecup({} as ICadastrarUsuario)
  }

  const handlerSubmit = (event: any) => {
    event.preventDefault();
  }
    return (
        <Body>
              <Form onSubmit={handlerSubmit}> 
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
                    value={email}
                  />
        
                  <TextInput
                    isFocus={focoSenha}
                    icon={<FaLock />}
                    tipo="password"
                    placeholder="sua senha"
                    onFocus={() => setFocoSenha(true)}
                    onBlur={() => setFocoSenha(false)}
                    onChange={s => setSenha(s.target.value)}
                    value={senha}
                  /> 
    
                  <SelectInput
                    icon={<FaNetworkWired/>}
                    titulo='setor'                
                    isFocus={focoSetor}
                    onFocus={() => setFocoSetor(true)}
                    onBlur={() => setFocoSetor(false)}
                    onChange={(s) => setSetor({id: parseInt(s.target.value), nome: 'nome'})}
                    value={estadoSetor}  
                  >
                    <option value={0}>Selecione uma sala</option>
                    {setores.map((s) => <option key={s.id} value={s.id}>{ s.nome }</option>)}
                    
                  </SelectInput>
                  
                  {usuario
                    ? <CheckAdmin
                      id="tipo"
                      titulo="Admin"
                      onChange={e =>  e.currentTarget.checked 
                        ? setTipo('admin')
                        : setTipo('usuario')}       
                    /> : null 
                  }
                  
                </Inputs>
                <Buttons>                
                  <ActionButton
                    icon={ <FaTimes/> }
                    titulo="cancelar"
                    onClick={limparCampos}
                  />
                  
                  <ActionButton
                    icon={ <FaSave/> }
                    titulo="salvar"
                    onClick={handlerSave}
                  />
                </Buttons>
                
            </Form>
        </Body>
      )
}

export default FormAdmUsuario