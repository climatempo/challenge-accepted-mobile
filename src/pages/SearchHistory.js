import React, { useState, useEffect } from 'react';
import { List, Divider } from 'react-native-paper';
import { ScrollView, FlatList, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getSearchHistory } from '../storage/searchHistoryService';
import { getCitie } from '../api/citie';
import { useSearchHistory } from '../context/searchHistoryContext';

export const SearchHistory = () => {

  const navigation = useNavigation();
  const { history, setHistory } = useSearchHistory();

  useEffect(() => {
    async function fetchData() {
      const result = await getSearchHistory();
      setHistory(result.data.reverse());
    }
    fetchData();
  }, [history]);

  const searchCitie = async (city) => {
    const response = await getCitie(city);

    if (response.data == 0) {
      SetEmptyCitieMessage(true);
    } else {
      navigation.navigate('SearchResults', response.data);
    }
  }

  return (
    <ScrollView>
      <FlatList
        data={history}
        ItemSeparatorComponent={Divider}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <List.Item
          title={item}
          onPress={() => searchCitie(item)}
          left={props => <List.Icon {...props} icon="magnify" color="#004983" />}
        />}
      />
    </ScrollView>
  )
}

export default SearchHistory;