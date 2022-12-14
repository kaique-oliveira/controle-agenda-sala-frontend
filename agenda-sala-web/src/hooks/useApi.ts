import axios from 'axios';
import { IAgendamento } from '../interfaces/IAgendamento';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}

export const useApi = () => ({

    login: async (email: string, senha: string) => {
        const response = await api.post('login/usuario', { email, senha });
        return response.data;
    },

    validarToken: async (token: string) => {
        const response = await api.post('login/validartoken', { token });

        return response.data;
    },

    cadastrarAgendamento: async (agendamento: IAgendamento) => {     
        try {
            const response = await api.post('agendamento/inserir', agendamento, config);

            return response.data;
        }
        catch (err: any) {
            alert(JSON.stringify(err.response.data));
        }
    },

    deletarAgendamento: async (idAgendamento : number) => {     
        try {
            const response = await api.delete(`agendamento/deletar/${idAgendamento}`, config);

            alert('agendamento deletado com sucesso!');
            return response.data;
        }
        catch (err: any) {
            alert('Ops, algo deu errado, tente de novo!');
        }
    },

    buscarAgendamentos: async (idSala: number, data: string) => {

        const response = await api.post('agendamento/buscar', {idSala, data}, config);
   
        return response.data;
    },

    buscarSalas: async () => {
        const response = await api.get('sala/buscar', config);
   
        return response.data;
    }


});