import { SelectHTMLAttributes } from 'react'
import { ISala } from '../../interfaces/ISala';
import { ContainerSelect, Options, SelectSala, Titulo } from './styles'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  salas: ISala[];
  titulo?: string;
}

function InputSala({ titulo, salas, ...rest } : Props) {
  return (
 
      <ContainerSelect>
        <Titulo>{titulo}</Titulo>  
        <SelectSala {...rest}>
          {salas.map((s) => <Options key={s.id} value={s.id}>{ s.nome }</Options>)}
        </SelectSala>
      </ContainerSelect>
   
  )
}

export default InputSala