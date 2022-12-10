import { Container, ConatinerInfo, Titulo, Descricao, ContainerBotoes } from './styles';

interface Props{
  button?: React.ReactNode;
  titulo: string;
  descricao: string;
}

function Card({ button, titulo, descricao, ...rest }: Props) {
  return (
    <Container>
      <ConatinerInfo>
        <Titulo>{ titulo }</Titulo>
        <Descricao> { descricao } </Descricao>
      </ConatinerInfo>

      <ContainerBotoes>
        {button}
      </ContainerBotoes>
    </Container>
  )
}

export default Card