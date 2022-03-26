import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
return (
  <S.Container>
    <S.Text>Campo Grande</S.Text>
    <Icon name="search" size={25}></Icon>
  </S.Container>
)
};

export default SearchBar;
