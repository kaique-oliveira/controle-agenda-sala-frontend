import { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, ImgHTMLAttributes } from 'react';
import { IBuscarSetor, IBuscarUsuario } from '../IBuscar';

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement>{
    icon?: JSX.Element;
    tipo: string;
    placheholder?: string;
    isFocus: boolean;
};

export interface ISelectInput extends SelectHTMLAttributes<HTMLSelectElement> {
    icon?: JSX.Element;
    titulo: string;
    isFocus: boolean;
};

export interface ISelectInputHora extends SelectHTMLAttributes<HTMLSelectElement> {
    icon?: JSX.Element;
    titulo: string;
    isFocus: boolean;
    horas: number[];
    minutos: number[];
};

export interface IActionButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    titulo?: string;
    icon?: React.ReactNode;
};

export interface ILogoScreen extends ImgHTMLAttributes<HTMLImageElement>{
    src: string;
};
  
export interface ICardAgendamento{
    idAgendamento: number;
    idUsuario: number;
    button?: React.ReactNode;
    titulo: string;
    descricao: string;
};

export interface ICardUsuario{
    usuario: IBuscarUsuario;
};

export interface ICardSetor{
    setor: IBuscarSetor;
};

export interface ICheckAdmin extends InputHTMLAttributes<HTMLInputElement>{
    titulo: string;
};