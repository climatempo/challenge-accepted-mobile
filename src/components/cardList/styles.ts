import styled from 'styled-components/native';
import LoaderComponent from '../loader';

type ContainerListProps = {
  showDisplay: boolean;
};

export const Container = styled.View`
  width: 100%; 
  position: relative;
  background-color: #F2F2F2;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  padding-top: 0;
`;

export const ContainerList =  styled.View<ContainerListProps>`
  width: 115%; 
  height: auto;
  max-height: 300px;
  padding: 10px;
  top: 70px;
  /* left: 20px; */
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

export const Loader = styled(LoaderComponent)`
  margin-top: 20px;
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

export const ClearHistoryButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

export const EmptyText = styled.Text`
  font-family: 'Cairo-Regular';
  font-size: 16px;
  color: gray;
  padding: 10px 20px;
`;