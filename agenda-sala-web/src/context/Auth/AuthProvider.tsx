import {useEffect, useState} from 'react'
import { useApi } from '../../hooks/useApi';
import { IUsuario } from '../../interfaces/IUsuario';
import { AuthContext } from './AuthContext'

export const AuthProvider = ({children} : {children : JSX.Element}) => {
    
    const [usuario, setUsuario] = useState<IUsuario | null>(null);
    const api = useApi();

    useEffect(() => { 
        const validartoken = async () => {
            const storangeData = localStorage.getItem('token');

            if (storangeData) {
                const data = await api.validarToken(storangeData);
 
                if (data) {
                    setUsuario(data);
                }
            }
        }

        validartoken();
    }, [api]);

    const login = async (email: string, senha: string) => {
        try {
            const data = await api.login(email, senha);

            if (data.usuario && data.token) {
                setUsuario(data.usuario);
                setToken(data.token);                
            }

            return true;
            
        } catch (err : any) {

            switch (err.code) {
                case "ERR_NETWORK":
                    alert("ops! sem acesso a internet!");
                    break;
                default:
                    alert(  );
            }
            return false;
        }
    }

    const logout = () => {
        setUsuario(null);
        localStorage.clear();
    }

    const setToken = (token: string) => {
        localStorage.setItem('token', token);
    }

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}