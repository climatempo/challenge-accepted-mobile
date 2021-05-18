import styled from 'styled-components/native';

import { ActivityIndicator } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
`;

export const Activity = styled(ActivityIndicator)`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const CityDetails = styled.View`
  background-color: #0078d4;
  margin: 10px;
  border-radius: 8px;
`;

export const Weathers = styled.ScrollView``;

export const Warning = styled.Text`
  flex: 1;

  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;
