import React from 'react';
import Logo from '../../assets/logo.png';
import{
  Head,
  LogoImg
} from '../../styles/';

interface LayoutProps {}

const Header: React.FC<LayoutProps> = ({}) => {
  return (
    <Head>
      <LogoImg src={Logo} alt="test" />
    </Head>
  );
};

export default Header;
