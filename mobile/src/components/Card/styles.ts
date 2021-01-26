import styled, {css} from 'styled-components/native';
import colors from '../../themes/colors';
import {CardStyleProps} from './interfaces';

const colorVariant = {
  max: css`
    color: ${colors['temperature-max']};
  `,
  min: css`
    color: ${colors['temperature-min']};
  `,
  default: css`
    color: ${colors['default-text']};
  `,
};

export const Container = styled.View`
  border-radius: 8px;
  margin-top: 20px;
  background-color: ${colors['light-grey']};
  width: 100%;
`;

export const TextContainer = styled.View`
  padding: 10px 20px 0 20px;
  background-color: ${colors.white};
  height: 70px;
  width: 100%;
`;

export const Date = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;

export const ForecastPhrase = styled.Text`
  padding-top: 8px;
  font-weight: 400;
  font-size: 18px;
`;

export const ForecastContainer = styled.View`
  padding: 0 20px;
  height: 120px;
  width: 100%;
`;

export const ForecastItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  margin-top: 20px;
`;

export const ItemText = styled.Text<CardStyleProps>`
  ${(props) => colorVariant[props.color]};
  font-size: 14px;
  font-weight: 700;
`;

export const Icon = styled.Image`
  padding-right: 16px;
`;
