import React, { useEffect, useState } from 'react';

interface CityProps {
  params: {
    id: number;
    name: string;
    state: string;
    country: string;
  }
}
interface NavigationProps {
  route: CityProps;
};

interface Weather{
  date_br: string;
  temperature: {
    min: number;
    max: number;
  }
  wind: {
    velocity_min: number;
    velocity_max: number;
  }
  rain: {
    probability: number;
    precipitation: number;
  }
  humidity: {
    min: number;
    max: number;
  }
  text_icon: {
    text: {
      phrase: {
        reduced: string;
      }
    }
  }
}

interface Response {
  id: number;
  name: string;
  state: string;
  country: string;

  data: Weather[];
}

import api from '../../services/api';
import { Alert } from 'react-native';
import WeatherCard from '../../components/WeatherCard';
import { Container, Weathers, CityDetails, Text, Activity } from './styles';
import { useHistoric } from '../../hooks/historic';


const Weather: React.FC<NavigationProps> = ({ route }) => {

  const [ id, setId ] = useState<number>(route.params.id);
  const [ name, setName ] = useState<string>(route.params.name);
  const [ state, setState ] = useState<string>(route.params.state);
  const [ loading, setLoading ] = useState<boolean>(false);

  const { save, load } = useHistoric();
  const [ weather, setWeather ] = useState<Response>();

  useEffect(() => {

    api.manager.get('').then(async(locales) => {
      console.log('manager get');
      setLoading(true);

      const idExists = locales.data.locales.find((locale:number) => id === locale);
      console.log('idExists', idExists, id)

      if(idExists){
        await api.forecast.get((`/${id}/days/15`)).then((data) => {
          console.log('forecast');
          setWeather(data.data);
          save(data.data);
        });
      }else{
        await api.manager.put('', {
          localeId: [id]
        }).then(async() => {
          console.log('manager put');
          await api.forecast.get((`/${id}/days/15`)).then((data) => {
            console.log('forecast then');
            setWeather(data.data);
            save(data.data);
          });

        }).catch(async(err) => {
          // error 400 só após 24 horas pode trocar //
          console.log('forecast catch', err);
          Alert.alert(
            'Limitação de Plano',
            'Seu plano permite visualizar as previsões de uma nova cidade apenas'
            + ' 24 horas após sua ultima atualização, iremos trazer os últimos dados'
            + ' que foram pesquisados (caso existam)',
          );

          //nesse caso irei puxar a ultima pesquisa bem sucedida
          const retrieveData = await load();

          setId(retrieveData[0].id);
          setName(retrieveData[0].name);
          setState(retrieveData[0].state);
          setWeather(retrieveData[0]);

        });
      }
      setLoading(false);
    });

  }, [])

  return (
    <Container>

      <CityDetails>
        <Text>Previsão para os próximos dias em</Text>
        <Text>{name} - {state}</Text>
      </CityDetails>

      {loading && <Activity color="#0078d4" size="large"/>}

      {!loading && <Weathers>
        {weather?.data.map((w, index) => (
            <WeatherCard
              key={index}
              date_br={w.date_br}
              humidity={w.humidity}
              temperature={w.temperature}
              rain={w.rain}
              wind={w.wind}
              text_icon={w.text_icon}
            />
          ))}
      </Weathers>}

    </Container>
  );
}

export default Weather;
