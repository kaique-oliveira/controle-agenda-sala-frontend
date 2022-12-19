import { IActionButton } from '../../interfaces/IComponents'
import { Button } from './styles'

const ActionButton = ({titulo, icon, ...rest }: IActionButton) => {
  return (
    <Button {...rest}> {icon} { titulo }</Button>
  )
}

export default ActionButton