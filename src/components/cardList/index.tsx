import React from 'react';
import { FlatList } from 'react-native';
import Cards from '../cards/card';
import * as S from './styles';


interface CardsItem {
  item: {
    id: string;
    date: string;
    info: string;
  };
}

const data = [
  { id: '1',
    date: '17/07/2022',
    info: 'Sol com muitas nuvens durante o dia. Períodos nublados, com chuva a qualquer hora.'
  },
  { id: '2',
    date: '18/12/2022',
    info: 'Períodos nublados, com chuva a qualquer hora. Sol com muitas nuvens durante o dia. '
  },
  { id: '3',
  date: '18/12/2022',
  info: 'Períodos nublados, com chuva a qualquer hora. Sol com muitas nuvens durante o dia. '
},

]

const CardList = () => {

  const renderItem = ({item}: CardsItem) =>{
    return (
      <Cards date={item.date} description={item.info}/>
    )
  }

return (
  <S.Container>
    <S.InfoText>Previsão para Campo Grande - MS</S.InfoText>
    <FlatList
     data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    >
    </FlatList>
  </S.Container>
)
};

export default CardList;
