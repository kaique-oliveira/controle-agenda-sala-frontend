import { useAgendamento } from '../../hooks/useAgendamento'
import { ISelectInputHora } from '../../interfaces/IComponents'
import { Body, ContainerSelect, Select } from './styles'

const SelectInputDuracao = ({icon, titulo, isFocus, horas, minutos, ...rest} : ISelectInputHora) => {

  const {horaDuracao, minutoDuracao, setHoraDuracao, setMinutoDuracao} = useAgendamento();

  return (
    <Body isFocus={isFocus}>
      {icon}
      {titulo}
      <ContainerSelect>
        <Select 
          id='selectHoraDuracao' 
          {...rest} 
          onChange={(hd) => setHoraDuracao(hd.target.value)}
          value={horaDuracao}
        > 
          {horas.map((h) => <option key={h < 10 ? '0' + h : h}>{h < 10 ? '0' + h : h}</option>)} 
        </Select>
        :
        <Select 
          id='selectMinutoDuracao' 
          {...rest}
          onChange={(md) => setMinutoDuracao(md.target.value)}
          value={minutoDuracao}
        > 
          {minutos.map((m) => <option key={m < 10 ? '0' + m : m}>{m < 10 ? '0' + m : m}</option>)} 
        </Select>
      </ContainerSelect>     
    </Body>
  )
}

export default SelectInputDuracao