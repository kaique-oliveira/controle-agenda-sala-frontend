import { useEffect, useState } from "react";
import { FaSave, FaTextHeight, FaEnvelope, FaLock  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputSetor from "../../components/InputSetor";
import InputText from "../../components/InputText";
import { useApi } from "../../hooks/useApi";
import { ISetor } from "../../interfaces/ISetor";
import { Container, ContainerForm, ContainerInputs, Imagem } from "./styles";
import icon from '../../assets/icon_cadastrese.svg';
import IsAdmin from "../../components/IsAdmin";
import { useAuth } from "../../hooks/useAuth";
import Header from "../../components/Header";
import { ICadastroUSuario } from "../../interfaces/ICadastroUsuario";


const CadastreSePage = () => {
    const navigate = useNavigate();
    const api = useApi();
    const auth = useAuth();

    const [setores, setSetores] = useState<ISetor[]>([]);

    const [id] = useState<number>(0);
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [tipo, setTipo] = useState<string>('usuario')
    const [setor, setSetor] = useState<ISetor>({} as ISetor);


    useEffect(() => {
        buscarSetores();
    }, []);

    const buscarSetores = async() => {
        const response: ISetor[] = await api.buscarSetores(); 

        if(response){
            setSetores(response);
        }
    }

    const cadastrarUsuario = async () => {
        if(nome && email && senha && setor.nome && setor.id){ 
            const dadosUsuario : ICadastroUSuario = {
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
        <Container>
            <Header/>
            <ContainerForm>
                <Imagem src={icon}/>
                <ContainerInputs>
                    <InputText
                    icon={<FaTextHeight size={20} color={'#C0C0C0'}/>}
                        placheholder="Seu nome"
                        tipoText="text" 
                        onChange={n => setNome(n.target.value)}
                        value={nome}
                    />
                     <InputText
                       icon={<FaEnvelope size={20} color={'#C0C0C0'}/>}
                        placheholder="seu e-mail interfocus"
                        tipoText="email" 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                     <InputText
                      icon={<FaLock size={20} color={'#C0C0C0'}/>}
                        placheholder="sua senha"
                        tipoText="password"
                        onChange={s => setSenha(s.target.value)} 
                        value={senha}
                    />
                    <InputSetor
                        titulo="Setor:"
                        setores={setores}
                        onChange={s => setSetor({id: parseInt(s.target.value), nome: 'nome'})}                  
                    />
                    {
                    auth.usuario 
                    ?  <IsAdmin 
                        titulo="Admin"
                        onChange={e =>  
                            e.currentTarget.checked ? setTipo('admin')
                                : setTipo('usuario')}
                        /> : null 
                    }
                   
                    
                </ContainerInputs>
                <Button
                        color='#0F0F0F'
                        border='1px solid #080809; '
                        width={25}
                        boxShadow='1px 1px 3px'
                        titulo='Salvar' 
                        icon={<FaSave color={'#C0C0C0'} size={20} />}
                        onClick={cadastrarUsuario}
                    />
                    
            </ContainerForm>
        </Container>
    );

}

export default CadastreSePage;