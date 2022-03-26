import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%; 
  background-color: #FAFAFA;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 6px;
  elevation: 3;
  margin-bottom: 20px;
`;

export const DataText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #4B4B4B;
  padding: 15px;

`;

export const InfoText = styled(DataText)`
  font-size: 14px;
  padding-top: 0;
`;

