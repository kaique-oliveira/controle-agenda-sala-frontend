import styled from "styled-components";

export const ContainerSelect = styled.div`
    width: 90%;
    height: 45px;

    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #303030;
`;

export const SelectSala = styled.select`
    width: 75%;
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
    font-size: 18px;
    color: #C0C0C0;
    margin-left: 10px;
`;


export const Options = styled.option`
    font-size: 18px;
    width: 100%;
    height: auto;
`;