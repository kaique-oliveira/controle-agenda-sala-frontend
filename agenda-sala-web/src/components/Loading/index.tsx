import { Load, Container } from "./styles"
import img from '../../assets/loading.svg';


export const Loading = () => {
    return (
        <Container>
            <Load src={ img } />
        </Container>
    )
}