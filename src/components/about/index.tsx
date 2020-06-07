import React from 'react';
import {
  InfoContainer,
  Title,
  AboutContainer,
  AboutItem,
} from '../../styles/';

interface aboutViewProps {
  name: string;
  species: string;
  status: string;
  gender: string;
}

const About: React.FC<aboutViewProps> = ({
  name,
  species,
  status,
  gender,
}) => {

  return (
    <InfoContainer>
      <Title>{name}</Title>
      <AboutContainer>
        <AboutItem>Species: {species}</AboutItem>
        <AboutItem>Gender: {gender}</AboutItem>
        <AboutItem>Status: {status}</AboutItem>
      </AboutContainer>
    </InfoContainer>
  );
};

export default About;
