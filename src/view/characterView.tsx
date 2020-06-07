import React, { useState } from 'react';
import Header from '../components/header';
import { Content, BackText, Text, ChangeContainer } from '../styles';
import About from '../components/about';
import Character from '../components/character';
import ChangeId from '../components/changeId';
import { useFetch } from '../hooks/useFetch';


interface characterViewProps {
  color?: string;
  title?: string;
}

const CharacterView: React.FC<characterViewProps> = ({ color, title }) => {
  const [id, setId] = useState<number>(1);
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  const [character, loading, fetchUrl] = useFetch(api);

  const { name, species, status, gender, image } = character;

  const handleId = (type: string) => {
    const loc = id;
    if (type === 'plus') {
      setId(loc + 1);
    } else if (type === 'less' && loc > 1) {
      setId(loc - 1);
    }
    fetchUrl();
  };

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
            <Character avatar={image} />
            <ChangeContainer>
              <ChangeId id={id} handleId={handleId} />
            </ChangeContainer>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Content>
    </>
  );
};

export default CharacterView;
