import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  padding: 20px;
  background-color: ${colors['container-background']};
  height: 100%;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  margin-bottom: 120px;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  margin: 10px 0;
`;

export const CurrentLocaleContainer = styled.View`
  padding-top: 15px;
`;

export const CurrentLocaleText = styled.Text`
  font-size: 26px;
  color: ${colors['default-text']};
`;

export const WithoutForecastContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 85%;
`;

export const WithoutForecastText = styled.Text`
  font-size: 22px;
  color: ${colors['primary-text']};
`;
