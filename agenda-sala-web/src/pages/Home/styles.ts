import styled from "styled-components";

export const Body = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.8em;

    background-color: ${({theme}) => theme.FUNDOTELA};
    position: absolute;
`;

export const Section = styled.section`
    width: 62%;
    height: 90%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    margin-top: 2em;

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
    width: 100%;
    height: 85%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 1em;
    padding: 6em 0 0 0;
    margin-bottom: 1em;

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

