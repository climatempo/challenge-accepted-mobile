import { ListItem, SearchBar } from '@react-native-elements/base'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { getCity, getCityWithState, getForecast } from '../../services/forecast/weatherService'
import { TOKEN } from '@env'
import Cards from '../cards/card'
import * as S from './styles'

const CardList = () => {

  const [cityForecastData, setCityForecastData] = useState<any>([])
  const [searchCities, setSearchCities] = useState<any>([])
  const [city, setCity] = useState<any>([])
  const [search, setSearch] = useState('')
  const [filteredDataSource, setFilteredDataSource] = useState<any>([])

  useEffect(() => {
    (async () => {
      try {
        const cities = await getCityWithState('Campo Grande', 'MS', TOKEN)
        setCity(cities.data)

        const forecast = await getForecast(cities.data[0].id, TOKEN)
        setCityForecastData(forecast.data)

      } catch (error: any) {
        console.log(error.response.data)
      }
    })()
  }, [])

  const getCities = async (text: string) => {
    setSearch(text)
    if (text.length < 5) return
    try {
      const cities = await getCity(search, TOKEN)
      setSearchCities(cities.data)
      setFilteredDataSource(cities.data)
    } catch (error: any) {
      console.log(error.response.data)
    }
  }

  const fetchForecast = async () => {
    const forecast = await getForecast(searchCities.data[0].id, TOKEN)
    setCityForecastData(forecast.data)
  }

  const renderInfoCards = ({ item }: any) => {
    return <Cards item={item} />
  }

  return (
    <>
      <S.Container>
        <SearchBar
          platform='android'
          value={search}
          lightTheme
          placeholder='Busque por uma cidade'
          onChangeText={text => getCities(text)}
          autoCorrect={false}
        >
        </SearchBar>
        <S.ContainerList showDisplay={search.length != 0}>
          <FlatList
            data={filteredDataSource}
            renderItem={({ item }): any => (
              <TouchableOpacity onPress={async () => await setCity(item.name)}>
                <ListItem.Title style={styles.text}>
                  {item.name} / {item.state}
                </ListItem.Title>
              </TouchableOpacity>
            )}
          >
          </FlatList>
        </S.ContainerList>

        <FlatList
          ListFooterComponent={<S.FooterContainer></S.FooterContainer>}
          ListHeaderComponent={<S.InfoText>{cityForecastData.name} / {cityForecastData.state}</S.InfoText>}
          data={cityForecastData.data}
          renderItem={renderInfoCards}
          showsVerticalScrollIndicator={false}
        >
        </FlatList>
      </S.Container>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#707070",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

});

export default CardList
