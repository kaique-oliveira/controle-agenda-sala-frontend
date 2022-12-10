import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border:  1px solid #403F3F;
    background-color: #303030;
`;

export const ContainerIcon = styled.div`
    width: 10%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
`;

export const CampoTxt = styled.input`
    width: 90%;
    height: 40px;

    font-size: 18px;
    border-radius: 10px;
    border: none;

    background-color: #303030;
    color: #C0C0C0;

    outline-width: 0;
    ::placeholder{
        color:  #4F4F4F;
    }
`;
