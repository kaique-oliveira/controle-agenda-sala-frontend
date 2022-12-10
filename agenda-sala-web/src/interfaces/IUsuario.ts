export interface IUsuario{
    token: string;
    usuario: {
        id: number
        nome: string;
        email: string;
        tipo: string;
    }
}