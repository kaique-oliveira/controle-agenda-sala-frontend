import { SelectHTMLAttributes } from 'react';
import { Container, SelectHora, ContainerIcon, SelectMinuto, Textos, ContainerSelect} from './styles';


interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: JSX.Element;
  horas: number[];
  minutos: number[];
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
        <SelectHora {...rest} id='selectHoraDuracao'> 
          {horas.map((h) => <option key={h}>{h < 10 ? '0' + h : h}</option>)}
        </SelectHora>
        <Textos>:</Textos>
        <SelectMinuto {...rest} id='selectMinutoDuracao'>
          {minutos.map((m) => <option key={m}>{m < 10 ? '0' + m : m}</option>)}
        </SelectMinuto>
      </ContainerSelect>
      
    </Container>
  )
}

export default InputText;
