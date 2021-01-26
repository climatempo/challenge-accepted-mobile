import axios from 'axios';
import {Alert} from 'react-native';
import {all, takeLatest, select, call, put} from 'redux-saga/effects';
import {IWeather} from '../../../components/Card/interfaces';
import {baseURL, token} from '../../../services/api';
import {
  addLocaleForecastError,
  addLocaleForecastRequest,
  addLocaleForecastSuccess,
} from './actions';
import {ActionTypes, ILocaleState, ILocale, ILocaleProps} from './types';
import NetInfo from '@react-native-community/netinfo';

type CheckLocaleForecastRequest = ReturnType<typeof addLocaleForecastRequest>;

function* checkLocaleForecast({payload}: CheckLocaleForecastRequest) {
  try {
    const {city} = payload;

    const locales: ILocaleState = yield select(
      (state: {locales: ILocaleState}) => {
        return state.locales;
      },
    );

    const alreadySurveyed = locales.surveyedCities.findIndex(
      (item) => item.name === city,
    );

    let currentCity: ILocale;
    const forecast: any = {data: {} as IWeather};
    let alreadyExist = false;

    if (alreadySurveyed < 0) {
      const currentSurveyedCity: {data: ILocale[]} = yield call(
        axios.get,
        `${baseURL}/api/v1/locale/city?name=${city}&token=${token}`,
      );

      const findIndex = currentSurveyedCity.data.findIndex(
        (item) => item.name === city,
      );

      currentCity = currentSurveyedCity.data[findIndex];

      const params = new URLSearchParams();
      params.append('localeId[]', String(currentCity.id));

      yield call(
        axios.put,
        `${baseURL}/api-manager/user-token/${token}/locales`,
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      const currentForecast = yield call(
        axios.get,
        `${baseURL}/api/v1/forecast/locale/${currentCity.id}/days/15?token=${token}`,
      );
      forecast.data = currentForecast.data;
    } else {
      currentCity = locales.surveyedCities[alreadySurveyed];

      const alreadySearchedForecast = locales.forecastSearched.findIndex(
        (item) => item.id === currentCity.id,
      );

      forecast.data = locales.forecastSearched[alreadySearchedForecast];
      alreadyExist = true;
    }

    const locale: ILocaleProps = {
      city: currentCity,
      forecast: forecast.data,
      alreadyExist,
    };

    yield put(addLocaleForecastSuccess(locale));
  } catch (err) {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        Alert.alert(
          'Atenção',
          'Sem conexão com a internet, fique tranquilo, você ainda pode pesquisar todos as cidades do seu histórico',
        );
      } else {
        Alert.alert('Ops, cidade não encontrada!');
      }
    });
    unsubscribe();
    yield put(addLocaleForecastError());
  }
}

export default all([
  takeLatest(ActionTypes.addLocaleForecastRequest, checkLocaleForecast),
]);
