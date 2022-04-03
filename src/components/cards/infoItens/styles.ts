import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 15px;
  flex-direction: row;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const FlexRow = styled.View`
  flex-direction: row;
`;

export const TextDescription = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  font-weight: bold;
  color: #707070;
`;

export const TextValue = styled.Text`
  font-family: Roboto-Regular;
  font-size: 18px;
  color: #707070;
  padding-left: 5px;
`;

export const TextMinTemp = styled(TextValue)`
  color: #0679be;
`;

export const TextMaxTemp = styled(TextValue)`
  color: #c72f2f;
  padding-right: 10px;
`;
