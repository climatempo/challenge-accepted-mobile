import React, { useEffect, useState } from 'react';

import { useHistoric } from '../../hooks/historic';
import WeatherCard from '../../components/WeatherCard';

import {
  Container,
  CityDetails,
  Weathers,
  Text
} from './styles';

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

const Offline: React.FC = () => {

  const [ lastSearch, setLastSearch ] = useState<Response>();
  const { load } = useHistoric();

  useEffect(() => {
    load().then((retrieveData) => {
      setLastSearch(retrieveData[0]);
    });
  }, []);


  return (
    <Container>
      <CityDetails>
        <Text>
          Última pesquisa válida realizada
        </Text>
        <Text>{lastSearch?.name} - {lastSearch?.state}</Text>
      </CityDetails>

      <Weathers>
        {lastSearch?.data.map((w, index) => (
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
      </Weathers>
    </Container>
  );
}

export default Offline;
