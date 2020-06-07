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
  height: 40vh;
  min-height: 410px;
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
  width: 50%;
  display: block;
  margin: 80px auto;
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
    transition: width 0.5s;
    left: 5%;
  }

  &:hover::after {
    width: 80%;
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
  line-height: 0.8;
  left: 0;
  text-align: center;
  background-color: #00afc7;
`;

export const Text = styled.div`
  font-size: 380px;
  font-weight: bold;
  color: #000;
  opacity: 0.1;
  line-height: 240px;
  text-align: center;
`;

export const ChangeContainer = styled.div`
  grid-column: 6 / 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const CurrentId = styled.p`
  text-align: center;
`;

export const Plus = styled.p`
  text-align: center;
`;

export const Less = styled.p`
  text-align: center;
`;

export const ArrowItem = styled.img`
  width: 30px;
  rotate: ${(props) => props.theme.rotate ? props.theme.rotate : '0'};
  cursor: pointer;
`;
