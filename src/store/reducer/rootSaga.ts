import {all, takeLatest} from 'redux-saga/effects';
import {HistoricTypes} from './historic/types';
import {CityTypes} from './city/types';
import {ForecastTypes} from './forecast/types';
import {load, removeHistoric, setHistoric} from './historic/sagas';
import {getForecast, loadLocalStorage} from './forecast/sagas';
import {searchCity} from './city/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(HistoricTypes.LOAD_REQUEST, load),
        takeLatest(HistoricTypes.SET_HISTORIC_REQUEST, setHistoric),
        takeLatest(HistoricTypes.REMOVE_HISTORIC_REQUEST, removeHistoric),
        takeLatest(CityTypes.SEARCH_REQUEST, searchCity),
        takeLatest(ForecastTypes.LOAD_REQUEST, getForecast),
        takeLatest(ForecastTypes.LOAD_LOCALSTORAGE_REQUEST, loadLocalStorage),
    ]);
}
1;
