import React, { useEffect, useState } from 'react';
import { List, Divider } from 'react-native-paper';
import { ScrollView, StyleSheet, FlatList, } from 'react-native';
import { getWeathers } from '../api/weather';
import WeatherCard from '../components/weatherCard';

export const WeatherForecast = ({ route }) => {
  const city = route.params;
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getWeathers(city.id);
      setForecasts(result.data.data);
    }
    fetchData();
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={forecasts}
        ItemSeparatorComponent={Divider}
        renderItem={({ item }) => <WeatherCard
          city={city.name} 
          date={item.date_br}
          humidity={item.humidity}
          rain={item.rain}
          sun={item.sun}
          temperature={item.temperature}
          text={item.text_icon.text.pt}
          thermal_sensation={item.thermal_sensation}
          uv={item.uv}
          wind={item.wind}
        />}
      />
    </ScrollView>
  )
}

export default WeatherForecast;