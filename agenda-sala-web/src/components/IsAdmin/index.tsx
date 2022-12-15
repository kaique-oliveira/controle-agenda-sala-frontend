import { InputHTMLAttributes } from "react";
import { CheckedAdmin, Titulo, Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
titulo: string;
}

const IsAdmin = ({titulo, ...rest} : Props) => {
    return(
        <Container>
            <CheckedAdmin type={'checkbox'} id='admin' {...rest}/>
            <Titulo htmlFor="admin"> {titulo}</Titulo>
            
        </Container>
    )
}

export default IsAdmin;