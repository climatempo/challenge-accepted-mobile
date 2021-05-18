import styled from 'styled-components/native';

import I from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar, ActivityIndicator } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
`;

export const Cities = styled.ScrollView``;

export const Search = styled(Searchbar)`
  margin: 15px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;


  height: 60px;
  background-color: #fff;
`;

export const Icon = styled(I)``;

export const Activity = styled(ActivityIndicator)`
  flex: 1;
`;
