import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width:100%;
  flex-direction: row;
`;

export const Container = styled.View`
  width: 50%; 
  height: 70px;
  background-color: #eeeeee;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Text = styled.Text`
  font-family: Roboto-Regular;
  font-size: 22px;
  color: #434343;
`;

export const TextMinTemp = styled(Text)`
  color: #0679BE;
`;

export const TextMaxTemp = styled(Text)`
  color: #C72F2F;
`;
