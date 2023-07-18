import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(17, 17, 17);
    height: 5rem;

    h1{
        color: rgb(255, 255, 255);
        font-family: 'Arvo', serif;
        font-weight: 400;
        margin-left: 10%;
        margin-right: 10%;
    }
`;

export const Content = styled.div`
    
    
    z-index: 5;
    background: rgb(17, 17, 17);
    
    
    width: 32%;
    margin-top: 150px;
    border-bottom-left-radius: 20px;
    
    
    margin-left: 68%;
    /* border: 1px solid red; */
    position: absolute;

   

    .modal{
        display: none;
        margin-left: -230px;
    }

    .modalOpen{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding-left: 20px;
        padding-bottom: 10px;

        p, li{
        font-size: 2rem;
        color: rgb(255, 255, 255);
        font-family: 'Arvo', serif;       
        }

        li{
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .close{            
            align-self: flex-start;
        }

    }

   
`;
