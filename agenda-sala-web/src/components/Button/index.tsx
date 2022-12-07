import { ButtonHTMLAttributes } from 'react';
import { Botao } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  titulo: string;
}

function Button({ titulo, ...rest} : Props)  {
  return (

      <Botao {...rest}> {titulo} </Botao>
  );
}

export default Button;