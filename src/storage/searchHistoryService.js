import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = '@searchHistory';

export const saveSearchHistory = async (city) => {
  try {
    const value = await AsyncStorage.getItem(KEY);
    if (value !== null) {
      //Já Existem Dados
      let json_value = JSON.parse(value);
      json_value.data.push(city);
      let result = JSON.stringify(json_value);
      await AsyncStorage.setItem(KEY, result)
    } else {
      //Não Existem Dados
      let searchHistory = {
        data: [city]
      }
      let result = JSON.stringify(searchHistory);
      await AsyncStorage.setItem(KEY, result)
    }
  } catch (e) {
    alert(e)
  }
}

export const getSearchHistory = async () => {
  try {
    const value = await AsyncStorage.getItem(KEY);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return JSON.parse(`{"data": []}`)
    }
  } catch (e) {
    alert(e)
  }
}