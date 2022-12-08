export interface IUsuario{
    token: string;
    usuario: {
        nome: string;
        email: string;
        tipo: string;
    }
}