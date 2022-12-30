import styled from "styled-components";

export const Button = styled.button`
    width: auto;
    height: auto;

    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    gap: 0.5em;

    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.TEXT};
    cursor: pointer;
    
    transition-property: all;
    transition-duration: 1s;

    :hover{
        color: ${({ theme }) => theme.CORDESTAQUE};
        
        transition-property: all;
        transition-duration: 1s;
    }
`;