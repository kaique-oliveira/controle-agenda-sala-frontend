import { Body, Input } from './styles'
import { ITextInput } from '../../interfaces/IComponents'

const TextInput = ({ icon, tipo, placheholder, isFocus, ...rest }: ITextInput) => {
    
  return (
    <Body isFocus={isFocus}>
      {icon}
      <Input
        type={tipo}
        placeholder={placheholder}
        {...rest}
      />
    </Body>
  )
}

export default TextInput