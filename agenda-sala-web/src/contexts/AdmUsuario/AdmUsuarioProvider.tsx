import { useState } from "react";
import { useApi } from "../../hooks/useApi"
import { IBuscarUsuario } from "../../interfaces/IBuscar";
import { ICadastrarUsuario } from "../../interfaces/ICadastrar";
import { AdmUsuarioContext } from "./AdmUsuarioContext"

export const AdmUsuarioProvider = ({ children }: { children: JSX.Element }) => {
    
    const api = useApi();

    const [usuarios, setUsuarios] = useState<IBuscarUsuario[]>([]);
    const [usuarioRecup, setUsuarioRecup] = useState<ICadastrarUsuario>({} as ICadastrarUsuario);

    const recuperarUsuario = async (idUsuario : number) => {
        setUsuarioRecup(usuarios.find(u => u.id == idUsuario) as ICadastrarUsuario);
    }

    const buscarUsuarios = async () => {
        const response = await api.buscarUsuarios();

        if (response) {
            setUsuarios(response);
        }
    }

    const editarUsuario = async(usuario : ICadastrarUsuario) => {
        const response = await api.editarUsuario(usuario);
        if (response) {
            alert('Usuário editado com sucesso!');
        }
    }

    const deletarUsuario = async (idUsuario: number) => {
        await api.deletarUsuario(idUsuario);
        buscarUsuarios();
    }

    return (
        <AdmUsuarioContext.Provider value={
            {
                usuarios,
                buscarUsuarios,
                editarUsuario,
                deletarUsuario,
                recuperarUsuario,
                usuarioRecup,
                setUsuarioRecup
            }}>
            {children}
        </AdmUsuarioContext.Provider>
    )
}