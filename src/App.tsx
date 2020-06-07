import React from 'react';
import CharacterView from './view/characterView';
import styled from 'styled-components';
import './style.css';

const Container = styled.div`
  background-color: #00afc7;
  padding: 20px;
  overflow: hidden;
`;


function App() {
  return (
    <Container>
      <CharacterView />
    </Container>
  );
}

export default App;
