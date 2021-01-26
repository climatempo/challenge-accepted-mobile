import {IWeather} from '../../../interface/weather';

export enum ActionTypes {
  addLocaleForecastRequest = 'ADD_LOCALE_FORECAST_REQUEST',
  addLocaleForecastSuccess = 'ADD_LOCALE_FORECAST_SUCCESS',
  addLocaleForecastError = 'ADD_LOCALE_FORECAST_ERROR',
  cleanLocaleForecastHistory = 'CLEAN_LOCALE_FORECAST_HISTORY',
}

export interface ILocale {
  id: number;
  name: string;
  state: string;
  country: string;
}

export interface ILocaleProps {
  city: ILocale;
  forecast: IWeather;
  alreadyExist: boolean;
}
export interface ILocaleItem {
  locales: {
    surveyedCities: ILocale[];
    forecastSearched: IWeather[];
    forecastIndex: number;
    currentLocale: ILocale;
  };
}

export interface ILocaleState {
  surveyedCities: ILocale[];
  forecastSearched: IWeather[];
  forecastIndex: number;
  currentLocale: ILocale;
}
