import React from 'react';
import InfoItens from '../infoItens';
import * as S from './styles';

const data = 
  { id: '1',
    maxTemperature: '20oC',
    minTemperature: '10oC',
    humidity: '10mm',
    rain: '50%'
  };


const Cards = ({date, description}: {date: string, description: string}) => {
return (
  <S.Container>
    <S.DataText>{date}</S.DataText>
    <S.InfoText>{description}</S.InfoText>
    <InfoItens maxTemperature={data.maxTemperature} minTemperature={data.minTemperature} humidity={data.humidity} rain={data.rain}></InfoItens>
  </S.Container>
)
};

export default Cards;
