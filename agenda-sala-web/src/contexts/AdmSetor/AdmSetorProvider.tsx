import React, { useState } from 'react'
import { useApi } from '../../hooks/useApi';
import { IBuscarSetor } from '../../interfaces/IBuscar';
import { ICadastrarSetor } from '../../interfaces/ICadastrar';
import { AdmSetorContext } from './AdmSetorContext'

const AdmSetorProvider = ({ children }: { children: JSX.Element }) => {

    const api = useApi();

    const [setores, setSetores] = useState<IBuscarSetor[]>([]);
    const [setorRecup, setSetorRecup] = useState<ICadastrarSetor>({} as ICadastrarSetor);

    const recuperarSetor = async (idSetor : number) => {
        setSetorRecup(setores.find(s => s.id == idSetor) as ICadastrarSetor);
    }

    const buscarSetores = async () => {
        const response = await api.buscarSetores();
        if (response) {
            setSetores(response);
        }
    }

    const editarSetor = async(setor : ICadastrarSetor) => {
        const response = await api.editarSetor(setor);
        if (response) {
            alert('Setor editado com sucesso!');
        }
    }

    const deletarSetor = async (idSetor: number) => {
        await api.deletarSetor(idSetor);
        buscarSetores();
    }

    return (
        <AdmSetorContext.Provider value={
            {
                setores,
                buscarSetores,
                editarSetor,
                deletarSetor,
                recuperarSetor,
                setorRecup,
                setSetorRecup
            }}>
            {children}
        </AdmSetorContext.Provider>
    )
}

export default AdmSetorProvider
