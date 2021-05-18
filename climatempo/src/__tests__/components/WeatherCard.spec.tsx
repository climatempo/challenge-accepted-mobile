import React from 'react';
import { render } from '@testing-library/react-native'
import WeatherCard from '../../components/WeatherCard';

const weatherProps = {
  date_br: '',
  temperature: {
    min: 0,
    max: 0
  },
  wind: {
    velocity_min: 0,
    velocity_max: 0,
  },
  rain: {
    probability: 0,
    precipitation: 0
  },
  humidity: {
    min: 0,
    max: 0
  },
  text_icon: {
    text: {
      phrase: {
        reduced: '',
      }
    }
  }
}

describe('WeatherCard Component', () => {
  it('should be able render WeatherCard component', () => {

    const card = render(
      <WeatherCard
        key={1}
        date_br={weatherProps.date_br}
        humidity={weatherProps.humidity}
        rain={weatherProps.rain}
        temperature={weatherProps.temperature}
        wind={weatherProps.wind}
        text_icon={weatherProps.text_icon}
      />
    );

    expect(card).toBeTruthy();

  })
});
