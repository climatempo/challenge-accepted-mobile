import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = (value: any, onChangeText: any) => {
return (
  <S.TextInput
    placeholder="Busque por uma cidade"
    value={value}
    onChangeText={onChangeText}
  >
  </S.TextInput>
  //   <Icon name="search" size={20}></Icon>
)
};

export default SearchBar;
