import {call, put} from 'redux-saga/effects';
import {searchSuccess, searchFailure} from './actions';
import {CityProvider} from '../../../provider/cityProvider';

type searchCityParams = {
    payload: {
        query: string;
    };
};
export function* searchCity(params: searchCityParams) {
    try {
        const cityProvider = new CityProvider();
        const resp = yield call(cityProvider.getCity, params.payload.query);
        yield put(searchSuccess(resp));
    } catch (error) {
        yield put(searchFailure());
    }
}
