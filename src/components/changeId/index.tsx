import React from 'react';
import { ChangeContainer } from '../../styles/';

interface changeIdProps {
  handleCharacter: any;
  id: number;
}

const ChangeId: React.FC<changeIdProps> = ({ handleCharacter, id = 1 }) => {
  return (
    <ChangeContainer>
      <input
        type="number"
        min="1"
        max="100"
        onChange={(e: any) => handleCharacter(e.target.value)}
      />
    </ChangeContainer>
  );
};

export default ChangeId;
