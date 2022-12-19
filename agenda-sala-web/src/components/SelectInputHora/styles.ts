import styled, { css } from "styled-components";

interface Props{
    isFocus: boolean;
}

export const Body = styled.div<Props>`
    width: 95%;
    height: 40px;
    padding-left: 0.5em;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5em;

    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.BORDAINPUT};
    background-color: ${({ theme }) => theme.FUNDOINPUT};
    color: ${({ theme }) => theme.TEXT};
    
    font-size: 18px;

    transition-property: all;
    transition-duration: 5ms;

    ${({ isFocus }) => isFocus == true && css`
        border: 1px solid ${({ theme }) => theme.CORDESTAQUE};
        box-shadow: 0px 0px 8px ${({ theme }) => theme.SHADOW};

        transition-property: all;
        transition-duration: 1s;
    `}
`;

export const Select = styled.select`
    width: 30%;
    height: auto;

    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.TEXT};

    border-radius: 10px;
    border: none;

    background-color: ${({ theme }) => theme.FUNDOINPUT};
    
    outline-width: 0;
    cursor: pointer;

    :hover{  
        color: ${({ theme }) => theme.CORDESTAQUE};
    
        transition-property: all;
        transition-duration: 1s;
    }
`;

export const ContainerSelect = styled.div`
    width: 70%;
    height: auto;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.TEXT};

    border-radius: 10px;
    border: none;

    background-color: ${({ theme }) => theme.FUNDOINPUT};
    
`;