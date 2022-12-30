import styled from "styled-components";

export const Body = styled.div`
    width: 97%;
    height: 70px;
    min-height: 70px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: ${({ theme }) => theme.FUNDOBOTAO};
    border: 1px solid ${({theme}) => theme.BORDACONTAINER};
    box-shadow: 0 0 3px ${({theme}) => theme.SHADOW};
`;

export const Conteudo = styled.div`
    width: 90%;
    height: 100%;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
`;

export const Titulo = styled.h4`
    width: 95%;
    height: auto;

    text-align: left;
    color: ${({theme}) => theme.CORDESTAQUE};
`;

export const Descricao = styled.p`
    width: 95%;
    height: auto;

    font-size: 17px;

    text-align: left;
    color: ${({theme}) => theme.TEXT};
`;

export const Botoes = styled.div`
    width: auto;
    height: 70px;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`;
