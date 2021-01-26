export interface IWeather {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  rain: {
    probability: number;
    precipitation: number;
  };
  humidity?: {
    min: number;
    max: number;
  };
  wind?: {
    velocity_avg: number;
  };
  text: string;
}

export interface CardStyleProps {
  color: 'max' | 'min' | 'default';
}
