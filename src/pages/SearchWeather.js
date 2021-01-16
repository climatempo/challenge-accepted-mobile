import React, { useState, useEffect } from 'react';
import { TextInput, Button, Dialog, Paragraph, } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';
import { getCitie } from '../api/citie';
import { useNavigation } from '@react-navigation/native';
import { saveSearchHistory } from '../storage/searchHistoryService';
import { useSearchHistory } from '../context/searchHistoryContext';

export const SearchWeather = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [emptyCitieMessage, SetEmptyCitieMessage] = useState(false);
  const { history, setHistory } = useSearchHistory();

  const hideDialog = () => SetEmptyCitieMessage(false);

  const searchCitie = async (citie) => {
    const response = await getCitie(citie);

    if (response.data == 0) {
      SetEmptyCitieMessage(true);
    } else {
      saveSearchHistory(citie);
      let temp_history = history;
      temp_history.push(citie);
      setHistory(temp_history);
      navigation.navigate('SearchResults', response.data);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/logo.png')}
      />
      <TextInput
        style={styles.input}
        label="Cidade"
        value={city}
        Type='Outlined'
        onChangeText={text => setCity(text)}
      />
      <Button
        style={styles.button}
        icon="magnify"
        mode="contained"
        color="#004983"
        onPress={() => searchCitie(city)}>
        Buscar
      </Button>
      <Dialog visible={emptyCitieMessage} onDismiss={hideDialog}>
        <Dialog.Title>Cidade Não Encontrada.</Dialog.Title>
        <Dialog.Content>
          <Paragraph>A cidade não foi encontrada!</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 70,
    resizeMode: 'center',
  },
  input: {
    width: '75%'
  },
  button: {
    marginTop: '2%'
  }
});
