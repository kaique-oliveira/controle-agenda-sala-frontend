import styled from "styled-components";

export const Load = styled.img`
    width: 6%;
    height: auto;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;


    @-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
    }
    @-webkit-keyframes spin { 
        100% { -webkit-transform: rotate(360deg); } 
    }
    @keyframes spin { 
        100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}`;

export const Container = styled.div`
    background-color: #0D0D0E;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

