import styled from 'styled-components/native';
import { Surface } from 'react-native-paper';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;

  margin-bottom: 10px;
`;

export const Date = styled.Text`
  text-align: center;
`;

export const WeatherConditionText = styled.Text`
  text-align: center;


  padding: 10px;
  font-weight: bold;
`;

export const CardElevation = styled(Surface).attrs({
  elevation: 8,
})`

  margin: 0 20px;
  border-radius: 8px;
`;

export const MaterialIcon = styled(Material)``;

export const IonicIcon = styled(Ionic)``;

export const Simbol = styled.Text`
  font-weight: bold;
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 10px;
`;

export const MinMaxView = styled.View``;

export const Temperature = styled.View`

  flex-direction: row;
  align-items: center;
`;

export const Humidity = styled.View`

  flex-direction: row;
  align-items: center;
`;

export const Wind = styled.View`

  flex-direction: row;
  align-items: center;
`;

export const Rain = styled.View`

  flex-direction: row;
  align-items: center;
`;

export const DataView = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: space-around;
`;
