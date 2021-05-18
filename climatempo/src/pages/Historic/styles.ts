import styled from 'styled-components/native';
import { Surface } from 'react-native-paper';


export const Container = styled.View`
  flex: 1;
`;

export const HistoryView = styled.ScrollView``;

export const Touchable = styled.TouchableOpacity``;


export const History = styled(Surface).attrs({
  elevation: 8,
})`
  border-bottom-color: #000;
  border-bottom-width: 1px;
  margin: 0 20px;

  margin-bottom: 15px;
  padding: 20px;
  border-radius: 8px;
`;

export const CardText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

export const HistoryDetails = styled.View`
  background-color: #0078d4;
  margin: 10px;
  border-radius: 8px;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: #fff;
  text-align: center;
`;

export const DeleteHistoric = styled.TouchableOpacity`
  background-color: #ce1204;

  justify-content: center;
  height: 60px;
`;

