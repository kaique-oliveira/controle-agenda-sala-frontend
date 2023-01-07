import styled from "styled-components";

export const Body = styled.main`
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    padding-top: 1em;
    padding-bottom: 2em;

    background-color: ${({theme}) => theme.FUNDOTELA};
    overflow: hidden;
    /* position: absolute; */
`;

export const Section = styled.section`
    width: 50%;
    height: 500px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
    border: 1px solid ${({theme}) => theme.BORDACONTAINER};
    box-shadow: 0 0 3px ${({ theme }) => theme.SHADOW};
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
    height: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1em;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
`;

export const Titulo = styled.h2`
    color: ${({theme}) => theme.TEXT};
`;