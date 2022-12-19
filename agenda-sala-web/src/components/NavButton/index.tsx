import { IActionButton } from '../../interfaces/IComponents'
import { Button } from './styles'

const  NavButton = ({icon, titulo, ...rest}:IActionButton) => {
  return (
      <Button {...rest}> {icon} { titulo }</Button>
  )
}

export default  NavButton