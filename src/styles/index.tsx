import styled from 'styled-components';

export const Head = styled.div`
  height: 10vh;
`;

export const LogoImg = styled.img`
  display: block;
  width: 150px;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const Info = styled.div`
  grid-column: 2 / 4;
`;

export const Display = styled.div`
  grid-column: 4 / 6;
`;
