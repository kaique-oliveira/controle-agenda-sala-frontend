import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { IBuscarSala, IBuscarUsuario } from "../../interfaces/IBuscar";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({children} : {children : JSX.Element}) => {
    const api = useApi();
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState<IBuscarUsuario | null>(null);
    const [salas, setSalas] = useState<IBuscarSala[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect(() => { 
        validartoken();
    }, []);

    const login = async (email: string, senha: string) => {
        try {
            const data = await api.login(email, senha);

            if (data.usuario && data.token) {
                setUsuario(data.usuario);
                localStorage.setItem('token', data.token);
                localStorage.setItem('usuario', JSON.stringify(data.usuario))
            }

            navigate('/home');    

        } catch (err : any) {

            switch (err.code) {
                case "ERR_NETWORK":
                    alert("ops! sem acesso a internet!");
                    break;
                default:
                    alert(err.response.data );
            }
        }
    }

    const validartoken = async () => {
        const storangeToken= localStorage.getItem('token');

        if (storangeToken) {
            const response = await api.validarToken(storangeToken);

            if (response) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('usuario', JSON.stringify(response.usuario));

                setUsuario(response.usuario);
               
                await buscarSalas(); 
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);    
            }
        }
    }

    const buscarSalas = async () => {
        const _salas = await api.buscarSalas() as IBuscarSala[];
        setSalas(_salas);
      };

    const logout = () => {
        setUsuario(null);
        localStorage.clear();
        navigate('/');
    }


    return (
        <AuthContext.Provider value={{ usuario, salas, buscarSalas, login, logout, validartoken, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}