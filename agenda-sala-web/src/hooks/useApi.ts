import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({

    login: async (email: string, senha: string) => {
        const response = await api.post('login/usuario', { email, senha });

        return response.data;
    },
    validarToken: async (token: string) => {
        const response = await api.post('login/validartoken', { token });

        return response.data;
    }

});