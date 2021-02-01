import {call, put} from 'redux-saga/effects';
import {loadSuccess, loadFailure} from './actions';
import {HistoricProvider} from '../../../provider/historicProvider';

export function* load() {
    try {
        const historicProvider = new HistoricProvider();
        const resp = yield call(historicProvider.getHistoric);
        yield put(loadSuccess(resp));
    } catch (error) {
        yield put(loadFailure());
    }
}
