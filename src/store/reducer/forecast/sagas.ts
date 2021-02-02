import {call, put} from 'redux-saga/effects';
import {loadSuccess, loadFailure} from './actions';
import {ForecastProvider} from '../../../provider/forecastProvider/';

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
    } catch (error) {
        yield put(loadFailure());
    }
}
