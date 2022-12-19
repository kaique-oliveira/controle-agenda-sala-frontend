import { ISelectInputHora } from '../../interfaces/IComponents'
import { Body, ContainerSelect, Select } from './styles'

const SelectInputHora = ({icon, titulo, isFocus, horas, minutos, ...rest} : ISelectInputHora) => {
  return (
    <Body isFocus={isFocus}>
      {icon}
      {titulo}
      <ContainerSelect>
        <Select id='selectHora' {...rest}> {horas.map((h) => <option key={h}>{h < 10 ? '0' + h : h}</option>)} </Select>
        :
        <Select id='selectMinuto' {...rest}> {minutos.map((m) => <option key={m}>{m < 10 ? '0' + m : m}</option>)} </Select>
      </ContainerSelect>     
    </Body>
  )
}

export default SelectInputHora