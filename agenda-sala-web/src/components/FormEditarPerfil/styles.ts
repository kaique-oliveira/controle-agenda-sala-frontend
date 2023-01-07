import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.FUNDOCONTAINER};
`;

export const Form = styled.form`
    width: 90%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${({ theme }) => theme.FUNDOCONTAINER};
`;

export const Inputs = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 35px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    gap:15px;
`;

export const Buttons = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
`;