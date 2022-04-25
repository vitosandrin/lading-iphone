import styled from 'styled-components';
import { keyframes } from 'styled-components';
import backgroundgrey from '../../assets/images/backgroundgrey.jpg'
import background3 from '../../assets/images/background3.jpg'
import background4 from '../../assets/images/background3.jpg'
import backgroundbaixp from '../../assets/images/backgroundbaixp.jpg'
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Background = styled.div`
    height: 100vh;
    width: 100%;
    background-size: contain;
    background: url(${backgroundgrey});
`;

export const BackgroundMidle = styled.div`
    height: 100vh;
    width: 100%;
    background-size: contain;
    background: url(${background4});
    display: flex;
    align-items: center;
    justify-content: start;
    @media(max-width: 800px){
        background-size: 100% 100% ;
    }
`;

export const SideBar = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
    width: 100%;
    background-color: transparent;
    
`;

export const Logo = styled.img`
     height: 60px;
     @media(max-width: 800px){
         margin-right: 35px;
    }
`;

export const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const float = keyframes`
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-20px);
    }

    100% {
        transform: translatey(0px);
    }
`;

export const TopImage = styled.img`
    height: 500px;
    width: 500px;

    display: inline-block;
    transform: translatey(0px);
    animation: ${float} 5s ease-in-out infinite;

    @media(max-width: 800px){
        height: 400px;
        width: 400px;
        margin-right: 35px;
    }
`;

export const TopText = styled.h1`
    color: white;
`;

export const BackgroundBottom = styled.div`
    height: 100vh;
    width: 100%;
    background: url(${backgroundbaixp});
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;


export const MidleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
`;

export const Image = styled.img`
    height: 600px;
    width: 600px;
    transition: all 0.3s ease;
    :hover {
        transform: scale(1.1);
    };  

    @media(max-width: 800px){
        height: 500px;
        width: 500px;
        margin-right: 25px;
    }
`;

export const LogoMidle = styled.img`
    height: 170px;
    width: 150px;
`;

export const MidleBox = styled.div`
    height: 15vh;
    width: 48vw;
    padding: 15px;
    display: flex;
    border: 1px solid grey;
    overflow: hidden;
    transition: .5s ease all;
    :hover{
        border: 1px solid black;
    }

    @media(max-width: 800px){
        height: 50px;
        width: 270px;
        margin-right: 35px;
    }
`;

export const LinkTo = styled(Link)`
    text-decoration: none;
    color: black;
`;

export const MidleText = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    letter-spacing: 6px;
    color: black;
    margin-right: auto;
    margin-left: auto;
    @media(max-width: 800px){
        font-size: 21px;
        letter-spacing: 2px;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15vh;
    background-color: black;
`;

export const FooterText = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    letter-spacing: 6px;
    color: white;
    margin-right: auto;
    margin-left: auto;
    @media(max-width: 800px){
        margin-right: 75px;
        font-size: 8px;
    } 
`;

export const EndContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    width: 65vw;
    height: 100vh;
`;


export const EndText = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 6px;
    color: white;
    margin-right: auto;
    margin-left: auto;
    @media(max-width: 800px){
        margin-right: 30px;
    }    
`;

export const PayButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid grey;
    border-radius: 12px;
    width: 150px;
    height: 40px;
    margin: 10px;
    transition: .5s ease all;
    cursor: pointer;
    :hover{
        border: 1px solid black;
    }
    @media(max-width: 800px){
        height: 35px;
        width: 150px;
        margin-right: 45px;
    }
`;