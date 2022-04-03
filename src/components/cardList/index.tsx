import { TOKEN } from '@env'
import * as S from './styles'
import { isEmpty } from 'lodash'
import Cards from '../cards/card'
import NoInternetModal from '../noInternetModal'
import React, { useEffect, useState } from 'react'
import { FlatList,  StyleSheet } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import Icon from 'react-native-vector-icons/FontAwesome5'
import CityForecastModel from '../../model/CityForecastModel'
import SearchHistoricModel from '../../model/SearchHistoricModel'
import { ListItem, SearchBar } from '@react-native-elements/base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getCity, getForecast } from '../../services/forecast/weatherService'
import Config from "react-native-config";

const cityForecastModel = new CityForecastModel()
const searchHistoricModel = new SearchHistoricModel()

const CardList = () => {

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [modalVisible, setModalVisible] = useState(true);
  const [cityForecastData, setCityForecastData] = useState<any>([])
  const [filteredDataSource, setFilteredDataSource] = useState<any>([])
  const [sourceOfList, setSourceOfList] = useState<'storage' | 'api' | null>(null)

  useEffect(() => {

    (async () => {
      try {
        setLoading(true)
        console.log("react native config: ", Config.TOKEN)
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
          const offline = !(state.isConnected && state.isInternetReachable);
          setModalVisible(offline);
        });

        const latestCity = JSON.parse(await AsyncStorage.getItem('latest') || '{}')
        console.log('latest city: ', latestCity)

        if (isEmpty(latestCity))
          setCityForecastData((await getForecast('3477', TOKEN)).data)
        else
          setCityForecastData((await getForecast(latestCity.id, TOKEN)).data)

        setLoading(false);

        return () => removeNetInfoSubscription();


      } catch (error: any) {
        setLoading(true)
        if (error.response.data) console.log(error.response.data)
        else console.log(error.message)

      }
    })()
  }, [])

  const getCitiesFromStorage = async () => {
    setFilteredDataSource((await searchHistoricModel.getAll()).map(city => JSON.parse(city.data)))
    setSourceOfList('storage')
  }

  const getCities = async (text: string) => {
    setSearch(text)
    if (text.length < 4) return
    try {
      const cities = await getCity(search, TOKEN)
      setFilteredDataSource(cities.data)
      setSourceOfList('api')
    } catch (error: any) {
      console.log(error.response.data)
    }
  }

  const renderSearchCityList = async (item: any) => {
    try {
      setLoading(true);

      const forecastData = await getForecast(item.id, TOKEN)
      await cityForecastModel.saveCityForecast(item.id, JSON.stringify(forecastData))
      setCityForecastData(forecastData.data)

      await searchHistoricModel.saveOnHistoric(item.id, JSON.stringify(item))
      await AsyncStorage.setItem('latest', JSON.stringify(item))

      setSearch('')
      setShowSearch(false)
      setLoading(false);
    } catch (error: any) {
      console.log(error.message)
      setLoading(false);
      setCityForecastData({})
    }
  }

  const clearHistoryByCity = async (itemId: string) => {
    await searchHistoricModel.deleteCityFromHistoric(itemId)
    getCitiesFromStorage()
  }

  const renderClearHistoryButton = (item: any) => {
    if (sourceOfList && sourceOfList == 'storage') {
      return (
        <S.ClearHistoryButton onPress={() => clearHistoryByCity(item.id)}>
          <Icon name="times" size={18} color={'#707070'} />
        </S.ClearHistoryButton>)
    } else { return }
  }

  if (loading) {
    return <S.Loader />;
  }

  return (
    <>
      <S.Container>
        {/* @ts-ignore */}
        <SearchBar
          containerStyle={styles.search}
          platform='ios'
          value={search}
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
            ListEmptyComponent={
              <S.EmptyText>Cidade não encontrada </S.EmptyText>
            }
          >
          </FlatList>
        </S.ContainerList>

        <FlatList
          ListFooterComponent={<S.FooterContainer></S.FooterContainer>}
          ListHeaderComponent={<S.InfoText>{cityForecastData.name} {cityForecastData.state}</S.InfoText>}
          data={cityForecastData.data}
          renderItem={({ item }: any) => {
            return <Cards item={item} />
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <S.EmptyText>Você não tem acesso à essa cidade! </S.EmptyText>
          }
        >
        </FlatList>
      </S.Container>

      <NoInternetModal
        show={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#707070",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  search:{
    backgroundColor: "#F2F2F2",
    width: '100%'
  }

});

export default CardList
