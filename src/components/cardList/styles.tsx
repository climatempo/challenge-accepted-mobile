import styled from 'styled-components/native';

type ContainerListProps = {
  showDisplay: boolean;
};

export const Container = styled.View`
  width: 100%; 
  position: relative;
  background-color: #fefefe;
  justify-content: center;
  align-items: flex-start;
  padding:20px;
  padding-top: 0;
`;

export const ContainerList =  styled.View<ContainerListProps>`
  width: 115%; 
  height: 350px;
  top: 55px;
  display: ${props => props.showDisplay ? 'flex' : 'none'} ;
  position: absolute;
  background-color: #fefefe;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border: 1px solid #eeeeee;
  elevation: 2;
  z-index: 1;
`;

export const FooterContainer = styled.View`
  height: 190px;
`;

export const InfoText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 18px;
  font-weight: bold;
  color: #707070;
  padding-bottom: 15px;
`;

export const TextInput = styled.TextInput`
 width: 90%; 
  background-color: #FAFAFA;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 14px;
  flex-direction: row;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  elevation: 2;
  margin: 20px;

`;


