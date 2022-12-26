import styled from "styled-components";

export const Body = styled.main`
    width: 100%;
    height: auto;
    
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.FUNDOTELA};
    overflow-y: auto;
    position: absolute;
`;

export const Section = styled.section`
    width: 90%;
    height: 550px;

    margin-top: 3%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1em;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
    border: 1px solid ${({theme}) => theme.BORDACONTAINER};
    box-shadow: 0 0 3px ${({ theme }) => theme.SHADOW};
`;

export const Cards = styled.div`
    width: 50%;
    height: auto;
    max-height: 90%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    gap: 1em;
    padding: 1em 0;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};

    overflow-y: auto;
`;
