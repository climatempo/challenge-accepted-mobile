import React from 'react';
import InfoItens from '../infoItens';
import * as S from './styles';


const Cards = ({item}: any) => {
  return (
    <S.Container>
      <S.DataText>{item.date_br}</S.DataText>
      <S.InfoText>{item.text_icon.text.pt}</S.InfoText>
      <InfoItens item={item}></InfoItens>
    </S.Container>
  )
};

export default Cards;
