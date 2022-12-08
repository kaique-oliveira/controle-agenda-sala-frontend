import styled from "styled-components";


export const Botao = styled.button`
    width: 20%;
    height: 40px;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;

    border:  1px solid #FF0000;
    background-color: #FF0000;
    color: white;
    cursor: pointer;

    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);

    &:hover{
        background-color: #FF211B;
        box-shadow: 1px 3px 3px rgba(0,0,0,0.4);
    }
`;
