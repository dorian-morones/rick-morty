import React, { useState } from 'react';
import Header from '../components/header';
import { Content } from '../styles';
import About from '../components/about';
import Character from '../components/character';
import { useFetch } from '../hooks/useFetch';

interface characterViewProps {
  color?: string;
  title?: string;
}

const CharacterView: React.FC<characterViewProps> = ({ color, title }) => {
  const [id, setId] = useState<number>(1);
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  const [character, loading, fetchUrl] = useFetch(api);

  return (
    <>
      <Header />
      <Content>
        <About 
          data={character}
        />
        <Character />
      </Content>
    </>
  );
};

export default CharacterView;
