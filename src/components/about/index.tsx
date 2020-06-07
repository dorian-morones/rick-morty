import React from 'react';
import {
  Info
} from '../../styles/';

interface aboutViewProps {
  data: any;
}

const About: React.FC<aboutViewProps> = ({ data }) => {
  console.log(data);

  const { name, species } = data;
  return (
    <Info>
      <p>{name}</p>
      <p>{species}</p>
    </Info>
  );
};

export default About;
