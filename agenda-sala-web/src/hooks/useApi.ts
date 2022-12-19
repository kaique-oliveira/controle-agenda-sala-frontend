import axios from "axios";
import { ICadastrarAgendamento, ICadastrarUSuario } from "../interfaces/ICadastrar";

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
});


export const useApi = () => ({

    //login
    login: async (email: string, senha: string) => {
        const response = await api.post('login/usuario', { email, senha });

        if (response.data.token) {
            api.defaults.headers.common = { 'Authorization': `Bearer ${response.data.token}` };
        }

        return response.data;
    },

    validarToken: async (token: string) => {
        const response = await api.post('login/validartoken', { token });
        api.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
        return response.data;
    },
    

    //usuario
    cadastrarUsuario: async (usuario : ICadastrarUSuario) => {
        try {
            const response = await api.post('usuario/inserir', usuario);

            return response.data;
        }catch (err: any) {
                alert(JSON.stringify(err.response.data));
        }
    },


    //agendamento
    cadastrarAgendamento: async (agendamento: ICadastrarAgendamento) => {     
        try {
            const response = await api.post('agendamento/inserir', agendamento);
            alert(response.data);
        }
        catch (err: any) {
            alert(err.response.data);
        }
    },

    buscarAgendamentos: async (idSala: number, data: string) => {
        const response = await api.post('agendamento/buscar', {idSala, data});

        return response.data;
    },

    deletarAgendamento: async (idAgendamento : number) => {     
        try {
            const response = await api.delete(`agendamento/deletar/${idAgendamento}`);

            alert('agendamento deletado com sucesso!');
            return response.data;
        }
        catch (err: any) {
            alert('Ops, algo deu errado, tente de novo!');
        }
    },


    //sala
    buscarSalas: async () => {
        try {
            const response = await api.get('sala/buscar');
            return response.data;
        }
        catch (err: any) {
            console.log(err.response.data)
        }  
    },


    //Setor
    buscarSetores: async () => {
        const response = await api.get('setor/buscar');
   
        return response.data;
    },

});