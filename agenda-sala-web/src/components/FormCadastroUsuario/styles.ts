import styled from "styled-components";

export const Body = styled.div`
    width: 40%;
    height: 92%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.FUNDOCONTAINER};
    border: 1px solid ${({ theme }) => theme.BORDACONTAINER};
    box-shadow: 0 1px 10px ${({ theme }) => theme.SHADOW};
`;

export const Form = styled.form`
    width: 90%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
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