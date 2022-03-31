import React, { useEffect, useState } from 'react'
import { TOKEN } from '@env'
import * as S from './styles'
import Cards from '../cards/card'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ListItem, SearchBar } from '@react-native-elements/base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { getCity, getCityWithState, getForecast } from '../../services/forecast/weatherService'

const CardList = () => {

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [cityForecastData, setCityForecastData] = useState<any>([])
  const [filteredDataSource, setFilteredDataSource] = useState<any>([])
  const [sourceOfList, setSourceOfList] = useState<'storage' | 'api' | null>(null)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const cities = await getCityWithState('Campo Grande', 'MS', TOKEN)

        const forecast = await getForecast(cities.data[0].id, TOKEN)
        setCityForecastData(forecast.data)
        setLoading(false);

      } catch (error: any) {
        setLoading(true);

        console.log(error.response.data)
      }
    })()
  }, [])

  const saveCitiesStorage = async (id: string, city: any) => {
    await AsyncStorage.setItem(id.toString(), city)
  }

  const getCitiesFromStorage = async () => {
    let allKeys = await AsyncStorage.getAllKeys() as string[]
    const storedCities = await AsyncStorage.multiGet(allKeys)
    setFilteredDataSource(storedCities.map((city: any) => { return JSON.parse(city[1] || '{}') }))
    setSourceOfList('storage')
  }

  const getCities = async (text: string) => {
    setSearch(text)
    if (text.length < 5) return
    try {
      const cities = await getCity(search, TOKEN)
      setFilteredDataSource(cities.data)
      setSourceOfList('api')
    } catch (error: any) {
      console.log(error.response.data)
    }
  }

  const renderInfoCards = ({ item }: any) => {
    return <Cards item={item} />
  }

  const renderSearchCityList = async (item: any) => {
    try {
      setLoading(true);
      const forecastData = await getForecast(item.id, TOKEN)
      setLoading(false);
      setCityForecastData(forecastData.data)
    } catch (error) {
      setLoading(false);
      setCityForecastData({})
    }

    await saveCitiesStorage(item.id, JSON.stringify(item))
    setSearch('')
    setShowSearch(false)
  }

  const clearHistoryByCity = async (itemId: string) => {
    console.log(itemId)
    await AsyncStorage.removeItem(itemId.toString())
    getCitiesFromStorage()
  }

  const renderClearHistoryButton = (item: any) => {
    if (sourceOfList && sourceOfList == 'storage') {
      return (
        <S.ClearHistoryButton onPress={() => clearHistoryByCity(item.id)}>
          <Icon name="times" size={18} color={'#707070'} />
        </S.ClearHistoryButton>)
    } else {
      return
    }

  }

  if (loading) {
    return <S.Loader />;
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
          onFocus={() => {
            getCitiesFromStorage()
            setShowSearch(true)
          }
          }
          onClear={() => setShowSearch(false)}
          onCancel={() => setShowSearch(false)}
        >
        </SearchBar>
        <S.ContainerList showDisplay={search.length != 0 || showSearch}>
          <FlatList
            data={filteredDataSource}
            renderItem={({ item }): any => (
              <S.ClearHistoryButton onPress={() => renderSearchCityList(item)}>
                <ListItem.Title style={styles.text}>
                  {item.name} / {item.state}
                </ListItem.Title>
                {renderClearHistoryButton(item)}
              </S.ClearHistoryButton>
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
