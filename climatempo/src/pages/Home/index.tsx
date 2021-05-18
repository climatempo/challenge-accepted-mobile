import React, { useCallback, useState } from 'react';

import api from '../../services/api';
import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';

import Card from '../../components/CityCard';
import { Alert } from 'react-native';
import { Container, Search, Cities, Footer, Icon, Activity } from './styles';
import { useHistoric } from '../../hooks/historic';

interface City {
  id: number;
  name: string;
  state: string;
  country: string;
}

const Home: React.FC = () => {

  const navigation = useNavigation();
  const { saveHistoric } = useHistoric();

  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cities, setCities] = useState<City[]>([])

  const handleNavigation = useCallback(async(id, name, state) => {
    navigation.navigate('Weather', {
      id,
      name,
      state
    });
    saveHistoric(id, name, state);
  }, []);

  const handleSearchEdit = useCallback(async(search) => {
    setSearchQuery(search);
  }, []);

  const handleSearch = useCallback(async(search) => {

    setLoading(true);

    await NetInfo.fetch().then(async(state) => {
      if(state.isConnected){
        await api.locale.get('/city', {
          params: {
            name: search
          }
        }).then((data) => {
          setCities(data.data);
        });
      }else{
        Alert.alert(
          'Sem conexão com a internet',
          'Redirecionaremos você para sua última pesquisa válida.',
        );

        navigation.navigate('Offline');
      }
    });

    setLoading(false);
  },[]);

  return (
    <Container>
      <Search
        placeholder="Encontre sua cidade"
        value={searchQuery}
        onChangeText={(search) => handleSearchEdit(search)}
        onSubmitEditing={() => handleSearch(searchQuery)}
        onIconPress={() => handleSearch(searchQuery)}
      />

      {!loading && <Cities>
        {cities.map(city => (
            <Card
              key={city.id}
              name={city.name}
              state={city.state}
              country={city.country}
              onPress={() => {
                handleNavigation(city.id, city.name, city.state)
              }}
            />
        ))}
      </Cities>}

      {loading && <Activity color="#0078d4" size="large"/>}

      <Footer>
        <Icon name="account" size={30} color="#000"
          onPress={() => {/*uma possivel pagina da conta*/}}
        />

        <Icon name="history" size={30} color="#000"
          onPress={() => {navigation.navigate('Historic')}}
        />
      </Footer>

    </Container>
  )
}

export default Home;
