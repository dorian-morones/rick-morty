import React from 'react';
import {
  ChangeContainer,
  CurrentId,
  Plus,
  Less,
  ArrowItem,
} from '../../styles/';
import Arrow from '../../assets/arrow.svg';

interface changeIdProps {
  handleId: any;
  id: number;
}

const ChangeId: React.FC<changeIdProps> = ({ handleId, id = 1 }) => {
  return (
    <ChangeContainer>
      <Plus onClick={(e: any) => handleId('plus')}>
        <ArrowItem src={Arrow} theme={{ rotate: '180deg' }} alt="" />
      </Plus>
      <CurrentId>{id}</CurrentId>
      <Less onClick={(e: any) => handleId('less')}>
        <ArrowItem src={Arrow} alt="" />
      </Less>
    </ChangeContainer>
  );
};

export default ChangeId;
