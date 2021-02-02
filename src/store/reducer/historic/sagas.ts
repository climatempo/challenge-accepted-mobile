import {call, put} from 'redux-saga/effects';
import {loadSuccess, loadFailure, loadRequest} from './actions';
import {HistoricProvider} from '../../../provider/historicProvider';
import {Historic} from '../../../model/historic/Historic';

type setHistoricParams = {
    payload: {
        item: Historic;
    };
};

export function* load() {
    try {
        const historicProvider = new HistoricProvider();
        const resp = yield call(historicProvider.getHistoric);
        yield put(loadSuccess(resp));
    } catch (error) {
        yield put(loadFailure());
    }
}

export function* setHistoric(params: setHistoricParams) {
    const historicProvider = new HistoricProvider();
    yield call(historicProvider.setHistoric, params.payload.item);
    yield put(loadRequest());
}

export function* removeHistoric() {
    const historicProvider = new HistoricProvider();
    yield call(historicProvider.removeHistoric);
    yield put(loadRequest());
}
