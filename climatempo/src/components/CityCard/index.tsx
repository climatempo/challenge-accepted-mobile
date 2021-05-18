import React from 'react';
import { TouchableOpacityProps } from 'react-native';

// essa biblioteca usei apenas para pegar bandeiras de países com o código
// exemplo "BR", "USA". O erro é dado pois o Typescript não encontra o arquivo de tipagem
// @ts-ignore: Unreachable code error
import Flag from 'react-native-flags';

import {
  Container,
  CardElevation,
  CardView,
  InfoView,
  TextView,
  Button,
  ButtonText,
  Title
} from './styles';

interface CardProps extends TouchableOpacityProps{
  name: string;
  state: string;
  country: string;
}

function Card({name, state, country, ...rest}: CardProps) {
  return (
    <Container>
      <CardElevation>
        <CardView
          {...rest}
        >
          <InfoView>
            <Flag code={country.trim()} size={64} type={"flat"}/>

            <TextView>
              <Title>{name}</Title>
              <Title>{state}</Title>
            </TextView>
          </InfoView>

          <Button
            {...rest}
          >
            <ButtonText>Clima</ButtonText>
          </Button>

        </CardView>
      </CardElevation>
    </Container>
  );
}

export default Card;
