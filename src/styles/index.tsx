import styled from 'styled-components';

export const Head = styled.div`
  height: 20vh;
`;

export const LogoImg = styled.img`
  display: block;
  width: 200px;
  margin: 0 auto;
`;

export const Content = styled.div`
  position: absolute;
  width: 100vw;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  left: 0px;
`;

export const InfoContainer = styled.div`
  grid-column: 2 / 4;
`;

export const ImageContainer = styled.div`
  grid-column: 4 / 6;
`;

export const Image = styled.img`
  width: 80%;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  border: solid #009db3  2px;
  transition: border 0.3s;
  -webkit-box-shadow: 0px 3px 20px -7px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 20px -7px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 20px -7px rgba(0,0,0,0.3);
  &:hover{
    border: solid #ff4646 10px;
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  text-transform: uppercase;
  &::after {
    content: '';
    background: #ff4646;
    display: block;
    position: relative;
    width: 1%;
    height: 5px;
    -webkit-transition: width 0.3s;
    transition: width 0.3s;
    top: -25px;
    left: 50%;
  }

  &:hover::after {
    width: 45%;
  }
`;

export const AboutContainer = styled.div`
  width: 70%;
`;

export const AboutItem = styled.p`
  text-align: center;
  padding: 15px;
  margin: 0 0 30px 0;
  border-radius: 8px;
  background-color: #ff4646;
  color: #fff;
  font-weight: bold;
  -webkit-box-shadow: 0px 3px 20px -7px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 20px -7px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 20px -7px rgba(0,0,0,0.3);
`;

export const BackText = styled.div`
  position:absolute;
  z-index:0;
  display:block;
  min-height:80vh; 
  min-width: 100vw;
  left: 0;
  text-align: center;
  background-color: #00afc7;
`;

export const Text = styled.div`
  font-size: 14em;
  font-weight: bold;
  color: #000;
  opacity: 0.1;
`;

export const ChangeContainer = styled.div`
  grid-column: 6 / 7;
`;
