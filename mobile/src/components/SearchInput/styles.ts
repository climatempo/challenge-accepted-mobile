import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const SearchContainer = styled.View`
  flex-direction: row;
  height: 60px;
  width: 100%;
  align-items: stretch;
  justify-content: flex-start;
  background-color: ${colors.white};
  border-radius: 8px;
`;
export const SearchBar = styled.TextInput`
  height: 100%;
  width: 85%;
  font-size: 22px;
  color: ${colors['primary-text']};
  padding-left: 10px;
`;
export const SearchButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Icon = styled.Image`
  opacity: 0.7;
  height: 24px;
  width: 24px;
`;

export const HistoryContainer = styled.ScrollView`
  margin: 10px;
  max-height: 92px;
`;

export const CleanHistoryWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HistoryTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${colors['default-text']};
  opacity: 0.8;
`;

export const CloseICon = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors['header-background']};
  opacity: 0.8;
`;

export const CleanHistoryButton = styled.TouchableOpacity`
  position: absolute;
  right: 6px;
  z-index: 99;
`;

export const HistoryText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
  color: ${colors['primary-text']};
`;

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export const HistoryButton = styled.TouchableOpacity``;
