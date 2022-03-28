import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import Cards from '../cards/card'
import { getCityId, getForecast } from '../../services/forecast/forecastService'
import * as S from './styles'
import SearchBar from '../searchBar'
import { filter } from 'lodash';

const CardList = () => {

  const [listForecast, setListForecast] = useState([]);
  const [city, setCity] = useState<any>([]);
  const [query, setQuery] = useState<any>('');
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const cities = await getCityId('Campo Grande', 'MS', '4756cde6f48e59b8e4dd1be0a11917e9')
        setCity(cities.data)

        const forecast = await getForecast(cities.data[0].id, '4756cde6f48e59b8e4dd1be0a11917e9')
        setListForecast(forecast.data.data)

      } catch (error: any) {
        console.log(error.response.data)
      }
    })()
  }, [])

  const handleSearch = (text: string) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(listForecast, (city: any) => {
      return contains(city, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = (name: any, query: any) => {

    if (name.includes(query)) {
      return true;
    }

    return false;
  };

  const renderItem = ({ item }: any) => {
    return <Cards item={item} />
  }

  return (
    <>
      <SearchBar 
        // onChangeText={handleSearch}
        // value={query as string}
      ></SearchBar>
      <S.Container>
        <S.InfoText>Campo Grande - MS</S.InfoText>
        <FlatList
          data={listForecast}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}

        >
        </FlatList>
      </S.Container>
    </>
  )
}

export default CardList
