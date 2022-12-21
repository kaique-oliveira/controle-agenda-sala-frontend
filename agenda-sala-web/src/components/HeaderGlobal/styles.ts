import styled from "styled-components";

export const Header = styled.header`
    width: 98vw;
    height: 5%;

    padding:0 1%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({theme}) => theme.FUNDOCONTAINER};
    border: 1px solid ${({theme}) => theme.BORDACONTAINER};
    box-shadow: 0 0 3px ${({ theme }) => theme.SHADOW};

    position: fixed;
    top: 0;

`;

export const Nav = styled.nav`
    width: auto;
    height: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    gap: 1em;
`;
