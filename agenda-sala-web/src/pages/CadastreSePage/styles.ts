import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

gap: 1em;
background-color: #0D0D0E;

`;

export const ContainerForm = styled.div`
    width: 440px;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 15px 0;

    background-color: #131313;
    border: 1px solid #080809;
    box-shadow: 0 1px 10px black;
`;

export const ContainerInputs = styled.div`
    width: 400px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;    

    gap:18px;
`;

export const Imagem = styled.img`
    width: 100px;
    height: auto;
`;
