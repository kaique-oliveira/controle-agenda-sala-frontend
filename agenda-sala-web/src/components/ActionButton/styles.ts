import styled from "styled-components";

export const Button = styled.button`
    width: 50%;
    height: 40px;

    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    gap: 0.5em;

    border-radius: 10px;

    border: 1px solid ${({ theme }) => theme.BORDACONTAINER};
    box-shadow: 0px 0px 3px ${({ theme }) => theme.SHADOW};

    background-color: ${({theme}) => theme.FUNDOBOTAO};
    color: ${({theme}) => theme.TEXT};
    cursor: pointer;

    transition-property: all;
    transition-duration: 1s;
    
    :hover{
        color: ${({ theme }) => theme.CORDESTAQUE};
        box-shadow: 0px 0px 6px ${({ theme }) => theme.SHADOW};

        transition-property: all;
        transition-duration: 1s;
    }
`;