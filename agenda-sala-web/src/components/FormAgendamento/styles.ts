import styled from "styled-components";

export const Body = styled.div`
    width: 90%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
`;
