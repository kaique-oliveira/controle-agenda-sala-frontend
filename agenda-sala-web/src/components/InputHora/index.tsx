import { InputHTMLAttributes } from 'react';
import { Container, SelectHora, ContainerIcon, SelectMinuto, Textos, ContainerSelect} from './styles';


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  horas: any;
  minutos: any;
  titulo?: string;
}


function InputText({ icon, horas, minutos, titulo, ...rest }: Props) {

  return (
    <Container>
      <ContainerIcon>
        {icon}
        <Textos>{ titulo }</Textos>
      </ContainerIcon>

      

      <ContainerSelect>
        <SelectHora> 
          {horas}
        </SelectHora>
        <Textos>:</Textos>
        <SelectMinuto>
          {minutos}
        </SelectMinuto>
      </ContainerSelect>
      
    </Container>
  )
}

export default InputText;
