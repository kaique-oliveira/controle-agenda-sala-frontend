import { SelectHTMLAttributes } from 'react'
import { ISala } from '../../interfaces/ISala';
import { ContainerSelect, SelectSala, Titulo } from './styles'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  salas: ISala[];
  titulo?: string;
}


function InputSala({ titulo, salas, ...rest } : Props) {
  return (
    // <Container>
      <ContainerSelect>
        <Titulo>{titulo}</Titulo>  
        <SelectSala {...rest}>
          {salas.map((s) => <option key={s.id} value={s.id}>{ s.nome }</option>)}
        </SelectSala>
      </ContainerSelect>
    // </Container>
  )
}

export default InputSala