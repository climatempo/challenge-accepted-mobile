import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';

const InfoItens = ({maxTemperature, minTemperature, humidity, rain}: {maxTemperature: string, minTemperature: string, humidity:string, rain: string}) => {
return (
  <>
  <S.Wrapper>
    <S.Container>
      <Icon name="arrow-up" size={25} color={'#434343'}></Icon>
      <S.TextMaxTemp>{maxTemperature}</S.TextMaxTemp>
    </S.Container>
    <S.Container>
      <Icon name="arrow-down" size={25} color={'#434343'}></Icon>
      <S.TextMinTemp>{minTemperature}</S.TextMinTemp>
    </S.Container>
  </S.Wrapper>
   <S.Wrapper>
    <S.Container>
      <IonIcons name="water" size={30} color={'#434343'}></IonIcons>
      <S.Text>{humidity}</S.Text>
    </S.Container>
    <S.Container>
      <IonIcons name="rainy" size={28} color={'#434343'}></IonIcons>
      <S.Text>{rain}</S.Text>
    </S.Container>
   </S.Wrapper>

   </>
  )
};

export default InfoItens;
