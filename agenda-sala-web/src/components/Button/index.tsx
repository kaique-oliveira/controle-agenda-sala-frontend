import { ButtonHTMLAttributes } from 'react';
import { Botao } from './styles';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  titulo?: string;
  color: string;
  border: string;
  width: number;
  boxShadow: string;
  icon?: React.ReactNode;
}

function Button({ titulo, color, border, width, boxShadow, icon, ...rest }: Props) {

  return (
    <Botao
      color={color}
      border={border}
      width={width}
      boxShadow={boxShadow}
      {...rest}> {icon}  {titulo} </Botao>
  );
}

export default Button;

