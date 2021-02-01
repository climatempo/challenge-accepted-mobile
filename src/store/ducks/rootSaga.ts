import {all, takeLatest} from 'redux-saga/effects';
import {HistoricTypes} from './historic/types';
import {load} from './historic/sagas';

export default function* rootSaga() {
    return yield all([takeLatest(HistoricTypes.LOAD_REQUEST, load)]);
}
