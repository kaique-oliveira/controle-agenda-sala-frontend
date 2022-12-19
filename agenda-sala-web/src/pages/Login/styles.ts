import styled from "styled-components";

export const Body = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: ${({theme}) => theme.FUNDOTELA};
`;
