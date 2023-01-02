import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaLock, FaNetworkWired, FaSave, FaTimes, FaUserAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'
import { useAuth } from '../../hooks/useAuth'
import { IBuscarSetor, IBuscarUsuario } from '../../interfaces/IBuscar'
import { ICadastrarUsuario } from '../../interfaces/ICadastrar'
import ActionButton from '../ActionButton'
import SelectInput from '../SelectInput'
import TextInput from '../TextInput'
import { Body, Buttons, Form, Inputs } from './styles'

const FormEditarPerfil = () => {

    const api = useApi();
    const {validartoken} = useAuth();
    const navigate = useNavigate();

    const [focoNome, setFocoNome] = useState<boolean>(false);
    const [focoEmail, setFocoEmail] = useState<boolean>(false);
    const [focoSenha, setFocoSenha] = useState<boolean>(false);
    const [focoSetor, setFocoSetor] = useState<boolean>(false);

    const [id, setId] = useState<number>(0);
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [tipo] = useState<string>('usuario');
    const [setor, setSetor] = useState<IBuscarSetor>({} as IBuscarSetor);
    const [estadoSetor, setEstadoSetor] = useState<number>(0);
    const [setores, setSetores] = useState<IBuscarSetor []>([]);

    useEffect(() => {
      buscarSetores();
      preencherCampos();
    }, []);

    const preencherCampos = () => {
      const usuario = JSON.parse(localStorage.getItem('usuario')?.toString()!) as IBuscarUsuario;
      setNome(usuario.nome);
      setEmail(usuario.email);
      setEstadoSetor(usuario.setor.id)
      setSetor(usuario.setor);
      setId(usuario.id);
    }

    const salvarAlteracao = async() => {
        if(nome && email  && setor.nome && setor.id){ 
          const dadosUsuario : ICadastrarUsuario = {
              id: id,
              nome: nome,
              email: email,
              senha: senha,
              tipo: tipo,
              setor: setor
          }

          const response = await api.editarUsuario(dadosUsuario);

          if (response) {
            alert(response);
            validartoken();
            navigate('/home');
          }
        }     
    }
  

    const buscarSetores = async() => {
        const response = await api.buscarSetores() as IBuscarSetor[]; 
    
        if(response){
            setSetores(response);
        }
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
          icon={<FaNetworkWired />}
          titulo='setor'                
          isFocus={focoSetor}
          onFocus={() => setFocoSetor(true)}
          onBlur={() => setFocoSetor(false)}
          onChange={(s) => {
            setSetor({id: parseInt(s.target.value), nome: 'nome'}) 
            setEstadoSetor(parseInt(s.target.value))}
          }
          value={estadoSetor}  
        >
          <option value={0}>Selecione uma sala</option>
          {setores.map((s) => <option key={s.id} value={s.id}>{ s.nome }</option>)}
          
        </SelectInput>       
        
      </Inputs>
      <Buttons>                
        <ActionButton
          icon={ <FaTimes/> }
          titulo="cancelar"
        //   onClick={limparCampos}
        />
        
        <ActionButton
          icon={ <FaSave/> }
          titulo="salvar"
          onClick={salvarAlteracao}
        />
      </Buttons>
      
  </Form>
</Body>
  )
}

export default FormEditarPerfil
