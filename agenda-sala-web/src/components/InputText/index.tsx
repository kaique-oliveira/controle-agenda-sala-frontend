import { InputHTMLAttributes } from 'react';
import { Container, CampoTxt, ContainerIcon } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    icon: JSX.Element;
    tipoText: string;
    placheholder: string;
}


function InputText({icon, tipoText, placheholder, ...rest} : Props) {
  return (
    <Container>
        <ContainerIcon>
            {icon}
        </ContainerIcon>
        <CampoTxt 
          type={tipoText}
          placeholder={placheholder}
          {...rest}
        />
    </Container>
  )
}

export default InputText;
