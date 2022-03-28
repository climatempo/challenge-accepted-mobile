import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 100%; 
  background-color: #FAFAFA;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 7px;
  elevation: 2;
  margin-bottom: 20px;
  border: 1px solid #eeeeee;
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

