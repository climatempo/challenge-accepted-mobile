export interface IForecastCity{
  id: number;
  name: string;
  state: string;
  country: string;
  meteogram: string;
  data: IForecastCityData[];
}

export interface IForecastCityData{
  date: string;
  date_br: string;
  humidity: {  
    min: number;
    max: number;};
  rain: {
    probability: number;
    precipitation: number;
  },
  wind: {
    velocity_avg: number;
  },
  text_icon:{
    text: {
      phrase: {
        reduced: string;
      }
    }
  },
  temperature: {
    min: number,
    max: number,
  }
}
