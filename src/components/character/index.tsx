import React from 'react';
import {
  Display
} from '../../styles';

interface characterProps {
  url?: string;
}

const Character: React.FC<characterProps> = ({ url }) => {
  return (
    <Display>
      <p>url</p>
      <p>Image</p>
    </Display>
  );
};

export default Character;
