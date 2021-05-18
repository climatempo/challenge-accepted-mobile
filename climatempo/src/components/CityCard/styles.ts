import styled from 'styled-components/native';
import { Surface } from 'react-native-paper';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;

export const CardElevation = styled(Surface).attrs({
  elevation: 8,
})`
  margin: 0 30px;
  border-radius: 8px;
`;

export const CardView = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;

  padding: 4px;
`;

export const TextView = styled.View`
  margin: 0 20px;
`;

export const Button = styled.TouchableOpacity`

  background-color: #0080CD;
  border-radius: 8px;
  height: 50px;
  width: 60px;

  justify-content: center;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const InfoView = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
`;
