import styled from "styled-components";

export const Body = styled.div`
    width: 99%;
    height: auto;
    max-height: 95%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    gap: 1em;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};

    overflow-y: auto;
`;