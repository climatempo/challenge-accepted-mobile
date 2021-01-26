import {Platform} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  height: ${Platform.OS === 'ios' ? 120 : 100}px;
  width: 100%;
  background-color: ${colors['header-background']};
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const Logo = styled.Image`
  max-height: 55px;
  margin-top: ${Platform.OS === 'ios' ? 40 : 0}px;
  align-self: center;
  width: 100%;
`;
