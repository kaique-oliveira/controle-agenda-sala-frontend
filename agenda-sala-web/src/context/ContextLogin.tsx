import { RouteComponentProps } from '@reach/router';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Api from  '../services/Api'


interface IDadosUsuario{
    token: string;
    usuario: {
        nome: string;
        email: string;
        tipo: string;
    }
}

interface IDadosLogin{
    email: string;
    senha: string;
}

interface IRetornoContextoLogin{
    logado:boolean;
    usuario: IDadosUsuario | null;
    fazerLogin(dadosLogin : IDadosLogin): Promise<void>;
    fazerLogout(): void;
}

interface IContextoLoginProps{
    children: JSX.Element;
  }


//criando um contexto, utilizando o hook do react
export const ContextoLogin = createContext<IRetornoContextoLogin>(null!);

export const LoginProvider =  ({children} : IContextoLoginProps)  => {

    const [usuario, setUsuario] = useState<IDadosUsuario | null>(null);
    const [logado, setLogado] = useState<boolean>(false);
    const navigate = useNavigate();

    //busca a key token e usuario no local storange, caso existir dados do usuario o objeto é atualizado
    useEffect(() => { 

        const storangeUsuario = localStorage.getItem('usuario');
        const storangeToken = localStorage.getItem('token');

        if (storangeUsuario && storangeToken) {
            setUsuario(JSON.parse(storangeUsuario));         
        }

        setLogado(true);
    }, [logado]);



    async function fazerLogin(dadosLogin : IDadosLogin) {
        Api.post("login/usuario", dadosLogin)
        .then((response) => {
            setUsuario(response.data.usuario);

            localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
            localStorage.setItem('token', response.data.token);

            setLogado(true);
            
            navigate('/home');

        })
        .catch((err) => {
            switch (err.code) {
                case "ERR_NETWORK":
                    alert("ops! sem acesso a internet!");
                    break;
                case "ERR_BAD_REQUEST":
                    alert(`Ops, ${err.response.data}`);
                    break;
                default:
                    alert("ops! algo deu errado!");
                }

            console.log(err)
        });
    }

    function fazerLogout() {
        localStorage.clear()
        setUsuario(null);
    }

    return (
        <ContextoLogin.Provider value={{logado, usuario, fazerLogin, fazerLogout}}>
            {children}
        </ContextoLogin.Provider>
    );
}

export function useLogin() {
    const context = useContext(ContextoLogin);
    return context;
};