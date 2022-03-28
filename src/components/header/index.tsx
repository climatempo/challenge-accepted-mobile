import React from 'react';
import * as S from './styles';
import Logo from '../../assets/images/logo-climatempo-stormgeo.png'

const Header = () => {
return (
  <S.Container>
    <S.ImageLogo source={Logo}/>
  </S.Container>
)
};

export default Header;
