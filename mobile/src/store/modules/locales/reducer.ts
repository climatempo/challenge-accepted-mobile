import {Reducer} from 'redux';
import {ILocaleState, ActionTypes, ILocale} from './types';
import produce from 'immer';
import RNRestart from 'react-native-restart';
import storage from '@react-native-community/async-storage';

const INITIAL_STATE: ILocaleState = {
  surveyedCities: [],
  forecastSearched: [],
  forecastIndex: 0,
  currentLocale: {} as ILocale,
};

const cart: Reducer<ILocaleState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addLocaleForecastSuccess:
        const {locale} = action.payload;

        const forecastInLocaleIndex = draft.forecastSearched.findIndex(
          (item) => item.id === locale.forecast.id,
        );

        const surveyedCityInLocaleIndex = draft.surveyedCities.findIndex(
          (item) => item.id === locale.city.id,
        );

        if (surveyedCityInLocaleIndex < 0) {
          draft.forecastSearched.push(locale.forecast);
          draft.forecastIndex = draft.forecastSearched.length - 1;
        } else {
          draft.forecastIndex = forecastInLocaleIndex;
        }

        if (locale.alreadyExist) {
          draft.surveyedCities.splice(surveyedCityInLocaleIndex, 1);
        }
        draft.surveyedCities.splice(0, 0, locale.city);
        draft.currentLocale = locale.city;

        break;
      case ActionTypes.addLocaleForecastError:
        break;

      case ActionTypes.cleanLocaleForecastHistory:
        draft = INITIAL_STATE;
        RNRestart.Restart();
        storage.clear();
        break;
      default: {
        return draft;
      }
    }
  });
};

export default cart;
