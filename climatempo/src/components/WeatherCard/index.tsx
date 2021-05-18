import React from 'react';

import {
  Container,
  CardElevation,
  Date,
  WeatherConditionText,
  DataView,
  MaterialIcon,
  IonicIcon,
  Simbol,
  Value,
  MinMaxView,
  Temperature,
  Humidity,
  Wind,
  Rain
} from './styles';

interface WeatherProps{
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

function Weather(
{
  date_br, temperature, wind, rain, humidity, text_icon
}: WeatherProps) {
  return (
    <Container>
      <CardElevation>

        <WeatherConditionText>
          {text_icon.text.phrase.reduced}
        </WeatherConditionText>
        <Date>Dia {date_br}</Date>

        <DataView>
          <Temperature>
            <MaterialIcon name="thermometer" size={30} color="#ce1204"/>
            <MinMaxView>
              <Simbol>
                <MaterialIcon name="chevron-up" size={10} color="#000"/>
                <Value>{temperature.max} &#x2103;</Value>
              </Simbol>
              <Simbol>
                <MaterialIcon name="chevron-down" size={10} color="#000"/>
                <Value>{temperature.min} &#x2103;</Value>
              </Simbol>
            </MinMaxView>
          </Temperature>

          <Wind>
            <MaterialIcon name="weather-windy" size={30} color="#dfdfdf"/>
            <MinMaxView>
              <Simbol>
                <MaterialIcon name="chevron-up" size={10} color="#000"/>
                <Value>{wind.velocity_max} km/h</Value>
              </Simbol>
              <Simbol>
                <MaterialIcon name="chevron-down" size={10} color="#000"/>
                <Value>{wind.velocity_min} km/h</Value>
              </Simbol>
            </MinMaxView>
          </Wind>

          <Humidity>
            <MaterialIcon name="water" size={30} color="#0078d4"/>
            <MinMaxView>
              <Simbol>
                <MaterialIcon name="chevron-up" size={10} color="#000"/>
                <Value>{humidity.max} kg/m³</Value>
              </Simbol>
              <Simbol>
                <MaterialIcon name="chevron-down" size={10} color="#000"/>
                <Value>{humidity.min} kg/m³</Value>
              </Simbol>
            </MinMaxView>
          </Humidity>

          <Rain>
            <IonicIcon name="rainy" size={40} color="#a8a8a8"/>
            <MinMaxView>
              <Simbol>
                <Value>{rain.probability} %</Value>
              </Simbol>
              <Simbol>
                <Value>{rain.precipitation} mm</Value>
              </Simbol>
            </MinMaxView>
          </Rain>
        </DataView>

      </CardElevation>
    </Container>
  );
}

export default Weather;
