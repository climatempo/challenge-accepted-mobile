import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 100%;
  background-color: #ffffff;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 7px;
  elevation: 1;
  margin-bottom: 20px;
`;

export const DataText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #4b4b4b;
  padding: 15px;
`;

export const InfoText = styled(DataText)`
  font-size: 14px;
  padding-top: 0;
  line-height: 20px;
`;
