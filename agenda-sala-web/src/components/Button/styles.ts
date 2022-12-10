import styled, { css } from "styled-components";

interface Props {
    color: string;
    border: string;
    width: number;
    boxShadow: string;
}

export const Botao = styled.button<Props>`
    width: ${(props) => props.width}%;
    height: 40px;
    font-size: 17px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    border-radius: 10px;

    border: ${(props) => props.border};
    background-color: ${(props) => props.color};
    color: #C0C0C0;
    cursor: pointer;

    ${({ border }) => border != 'none' && css`
        
    `}
  

    ${({ border }) => border != 'none' && css`

        box-shadow: 0 1px 4px black; 

        :hover{
            border-color: #080809; 
            box-shadow: 2px 3px 15px black;
            transition: 0.2s ease-out;
        }
    `
    // || css`
    //     :hover{
    //         /* color: #FF211B; */
    //         font-size: 20px;
    //         box-shadow: 0 0 0 black;
    //         transition: 0.2s ease-out;
    //     }
    
    // ` 
    }
`;

