import styled from "styled-components";

export const Container = styled.div`
    width: 65%;
    height: 80px;

    display: flex;
    justify-content: center;

    background-color: #FF211B;
    border: 1px solid #080809;
    box-shadow: 0 0 5px black;

`;

export const ConatinerInfo = styled.div`
    width: 90%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 10px;
    margin-left: 5px;
    background-color: #0D0D0E;
`;

export const ContainerBotoes = styled.div`
    width: 10%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #0D0D0E;
`;



export const Titulo = styled.h3`
    color: #FF211B;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Descricao = styled.p`
    color: #C0C0C0;

    display: flex;
    justify-content: center;
    align-items: center;
`;