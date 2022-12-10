import styled from "styled-components";


export const ContainerBody = styled.body`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: #0D0D0E;
`;


export const ContainerMain = styled.main`
    width: 100%;
    height: 92%;

    display: flex;
    justify-content: center;
    gap: 25px;
    align-items: center;
`;

export const ContainerHeader = styled.header`
    width: 98%;
    height: 8%;

    padding: 0% 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color:#131313;
    border-bottom: 1px solid #080809;
    box-shadow: 0 1px 5px black;
`;


export const ContainerAside = styled.aside`
    width: 30%;
    height: 95%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    background-color:#131313;
    border: 1px solid #080809;
    box-shadow: 0 0 5px black;
    
`;

export const ContainerForm = styled.div`
    width: 100%;
    height: 28%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;

export const ContainerCards = styled.section`
    width: 60%;
    height: 90%;

    padding-top: 10px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    background-color:#131313;
    border: 1px solid #080809;
    box-shadow: 0 0 5px black;
`;


export const Options = styled.option`
    width: 100%;
    height: auto;

    justify-content: center;
    align-items: center;
    text-align: center;
`;