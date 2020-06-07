import React, { useState } from 'react';
import Header from '../components/header';
import { 
  Content,
  BackText,
  Text
 } from '../styles';
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

  const {name, species, status, gender, image } = character;

  return (
    <>
      <Header />
      <BackText>
        <Text>{name}</Text>
      </BackText>
      <Content>
        {!loading ? (
          <>
            <About
              name={name}
              species={species}
              status={status}
              gender={gender}
            />
            <Character
              avatar={image}
            />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Content>
    </>
  );
};

export default CharacterView;
