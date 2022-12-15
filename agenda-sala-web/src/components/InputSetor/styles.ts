import styled from "styled-components";

export const ContainerSelect = styled.div`
    width: 100%;
    height: 45px;

    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #303030;
    border: 1px solid #403F3F;
`;

export const SelectSetor = styled.select`
    width: 80%;
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
`;

export const Titulo = styled.span`
    width: 15%;
    margin-left: 10px;
    font-size: 18px;
    color: #C0C0C0;

`;
