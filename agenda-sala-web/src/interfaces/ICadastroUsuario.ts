import { ISetor } from "./ISetor";

export interface ICadastroUSuario{
    id: number;
    nome: string;
    email: string;
    senha: string;
    tipo: string;
    setor: ISetor;
}