import { InputHTMLAttributes } from 'react'
import { ContainerSelect, SelectSala, Titulo } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  salas: any;
  titulo?: string;
}


function InputSala({ titulo, salas } : Props) {
  return (
    // <Container>
      <ContainerSelect>
        <Titulo>{titulo}</Titulo>  
        <SelectSala>
          {salas}
        </SelectSala>
      </ContainerSelect>
    // </Container>
  )
}

export default InputSala