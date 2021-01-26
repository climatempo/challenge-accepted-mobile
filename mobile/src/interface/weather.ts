export interface IWeather {
  id: number;
  name: string;
  state: string;
  coutry: string;
  data: {
    date_br: string;
    temperature: {
      min: number;
      max: number;
    };
    rain: {
      probability: number;
      precipitation: number;
    };
    humidity: {
      min: number;
      max: number;
    };
    wind: {
      velocity_avg: number;
    };
    text_icon: {
      text: {
        phrase: {
          reduced: string;
        };
      };
    };
  }[];
}
