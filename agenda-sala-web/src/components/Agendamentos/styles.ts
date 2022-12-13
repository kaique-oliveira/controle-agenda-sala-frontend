import styled from "styled-components";

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

    padding: 10px 0;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    background-color:#131313;
    border: 1px solid #080809;
    box-shadow: 0 0 5px black;
    overflow-y: auto;
`;
