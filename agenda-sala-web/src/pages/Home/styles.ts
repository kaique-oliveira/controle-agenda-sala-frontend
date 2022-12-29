import styled from "styled-components";

export const Body = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${({theme}) => theme.FUNDOTELA};
`;

export const Section = styled.section`
    width: 60%;
    height: 90%;

    margin-top: 2em;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
    border: 1px solid ${({theme}) => theme.BORDACONTAINER};
    box-shadow: 0 0 2px ${({ theme }) => theme.SHADOW};

`;

export const HeaderSection = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
`;

export const BodySection = styled.div`
    width: 95%;
    height: 90%;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};

    overflow-y: auto;
`;

export const Titulo = styled.h2`
    color: ${({theme}) => theme.TEXT};
`;





export const Aside = styled.aside`
    width: 35%;
    height: 90%;

    margin-top: 2em;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
    border: 1px solid ${({theme}) => theme.BORDACONTAINER};
    box-shadow: 0 0 2px ${({ theme }) => theme.SHADOW};

    position: static;
`;

