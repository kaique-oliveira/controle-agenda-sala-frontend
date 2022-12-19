import { ICheckAdmin } from '../../interfaces/IComponents';
import { Body, Input, Titulo } from './styles';

const CheckAdmin = ({titulo, ...rest} : ICheckAdmin) => {
  return (
    <Body>
        <Input type={'checkbox'} id='admin' {...rest}/>
          <Titulo htmlFor="admin"> { titulo } </Titulo>
    </Body>
  )
}

export default CheckAdmin