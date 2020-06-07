import React from 'react';
import {
  ImageContainer,
  Image
} from '../../styles';

interface characterProps {
  avatar?: any;
}

const Character: React.FC<characterProps> = ({ avatar }) => {
  return (
    <ImageContainer>
      <Image src={avatar} alt="dd" />
    </ImageContainer>
  );
};

export default Character;
