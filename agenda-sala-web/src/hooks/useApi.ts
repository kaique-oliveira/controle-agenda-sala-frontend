import axios from 'axios';

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

    buscarAgendamentos: async () => {
        const response = await api.get('agendamento/buscar', config);
   
        return response.data;
    },

    buscarSalas: async () => {
        const response = await api.get('sala/buscar', config);
   
        return response.data;
    }


});