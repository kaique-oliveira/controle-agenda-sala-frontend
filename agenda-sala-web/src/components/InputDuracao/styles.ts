import styled from 'styled-components';



export const Container = styled.div`
    width: 90%;
    height: 45px;

    border-radius: 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #303030;
`;

export const ContainerIcon = styled.div`
    width: 60%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    border-radius: 10px;
`;


export const ContainerSelect = styled.div`
    width: 30%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`;


export const SelectHora = styled.select`
    width: 50%;
    height: 40px;

    font-size: 18px;
    border-radius: 10px;
    border: none;

    background-color: #303030;
    color: #C0C0C0;

    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    cursor: pointer;
    :hover{
            border:1px solid #111111;     
        }
`;

export const SelectMinuto = styled.select`
    width: 50%;
    height: 40px;

    font-size: 18px;
    border-radius: 10px;
    border: none;

    background-color: #303030;
    color: #C0C0C0;

    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    cursor: pointer;
    :hover{
            border:1px solid #111111;     
        }
`;



export const Textos = styled.span`
    font-size: 18px;
    color: #C0C0C0;
`;


