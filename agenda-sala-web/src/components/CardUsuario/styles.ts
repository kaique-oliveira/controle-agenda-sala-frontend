import styled from "styled-components";

export const Body = styled.div`
    width: 90%;
    height: 80px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${({ theme }) => theme.FUNDOTELA};
    border: 1px solid ${({theme}) => theme.BORDACONTAINER};
    box-shadow: 0 0 3px ${({theme}) => theme.SHADOW};
`;

export const Conteudo = styled.div`
    width: 90%;
    height: 70px;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;;
`;

export const Botoes = styled.div`
    width: 10%;
    height: 70px;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;;
`;

export const Titulo = styled.h3`
    width: 80%;
    height: auto;

    text-align: center;
    color: ${({theme}) => theme.CORDESTAQUE};
`;

export const Descricao = styled.p`
    width: 80%;
    height: auto;

    font-size: 17px;

    text-align: center;
    color: ${({theme}) => theme.TEXT};
`;