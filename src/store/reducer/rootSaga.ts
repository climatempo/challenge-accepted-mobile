import {all, takeLatest} from 'redux-saga/effects';
import {HistoricTypes} from './historic/types';
import {CityTypes} from './city/types';
import {load} from './historic/sagas';
import {searchCity} from './city/sagas';
import {ForecastTypes} from './forecast/types';
import {getForecast} from './forecast/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(HistoricTypes.LOAD_REQUEST, load),
        takeLatest(CityTypes.SEARCH_REQUEST, searchCity),
        takeLatest(ForecastTypes.LOAD_REQUEST, getForecast),
    ]);
}
1;
