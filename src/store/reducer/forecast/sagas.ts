import {call, put} from 'redux-saga/effects';
import {loadSuccess, loadFailure} from './actions';
import {ForecastProvider} from '../../../provider/forecastProvider/';
import {setHistoricRequest} from '../historic/actions';

type getForecastParams = {
    payload: {
        id: number;
    };
};
export function* getForecast(params: getForecastParams) {
    try {
        const forecastProvider = new ForecastProvider();
        const resp = yield call(
            forecastProvider.getForecast,
            params.payload.id,
        );
        yield put(loadSuccess(resp));
        yield put(setHistoricRequest({name: resp.city}));
        yield call(forecastProvider.setForecastOnLocalStorage, resp);
    } catch (error) {
        yield put(loadFailure());
    }
}

export function* loadLocalStorage() {
    const forecastProvider = new ForecastProvider();
    const resp = yield call(forecastProvider.loadFromLocalStorage);
    yield put(loadSuccess(resp));
}
