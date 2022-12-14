import { useAgendamento } from '../../hooks/useAgendamento'
import { ISelectInputHora } from '../../interfaces/IComponents'
import { Body, ContainerSelect, Select } from './styles'

const SelectInputHora = ({icon, titulo, isFocus, horas, minutos, ...rest} : ISelectInputHora) => {

  const {horaInicio, minutoInicio, setHoraInicio, setMinutoInicio} = useAgendamento();

  return (
    <Body isFocus={isFocus}>
      {icon}
      {titulo}
      <ContainerSelect>
        <Select 
          id='selectHora' 
          {...rest} 
          onChange={(hi) => setHoraInicio(hi.target.value)}
          value={horaInicio}
        > 
          {horas.map((h) => <option key={h < 10 ? '0' + h : h}>{h < 10 ? '0' + h : h}</option>)} 
        </Select>
        :
        <Select 
          id='selectMinuto' 
          {...rest}
          onChange={(mi) => setMinutoInicio(mi.target.value)}
          value={minutoInicio}
        > 
          {minutos.map((m) => <option key={m < 10 ? '0' + m : m}>{m < 10 ? '0' + m : m}</option>)} 
        </Select>
      </ContainerSelect>     
    </Body>
  )
}

export default SelectInputHora