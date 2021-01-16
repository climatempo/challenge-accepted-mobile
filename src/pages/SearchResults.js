import * as React from 'react';
import { List, Divider } from 'react-native-paper';
import { ScrollView, FlatList, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SearchResults = ({ route }) => {
  const navigation = useNavigation();
  const cities = route.params;

  return (
    <ScrollView>
      <FlatList
        data={cities}
        ItemSeparatorComponent={Divider}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <List.Item
          key={item.id}
          title={item.name}
          description={item.state}
          onPress={() => navigation.navigate('WeatherForecast', item)}
          left={props => <List.Icon {...props} icon="beach" color="#004983" />}
        />}
      />
    </ScrollView>
  )
}

export default SearchResults;