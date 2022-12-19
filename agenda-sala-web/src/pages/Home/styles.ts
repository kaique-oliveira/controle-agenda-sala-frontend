import styled from "styled-components";

export const Body = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${({ theme }) => theme.FUNDOTELA};
`;

export const Section = styled.section`
    width: 60%;
    height: 90%;

    margin-top: 2.5%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 1em;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
    border: 1px solid ${({theme}) => theme.BORDACONTAINER};
    box-shadow: 0 0 3px ${({ theme }) => theme.SHADOW};

    position: static;
`;


export const Aside = styled.aside`
    width: 35%;
    height: 92.5%;
    margin-top: 2em;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
    border: 1px solid ${({theme}) => theme.BORDACONTAINER};
    box-shadow: 0 0 3px ${({theme}) => theme.SHADOW};
`;
