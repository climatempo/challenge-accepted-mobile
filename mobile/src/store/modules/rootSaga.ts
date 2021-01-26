import {all} from 'redux-saga/effects';

import locales from './locales/sagas';

export default function* rootSaga() {
  return yield all([locales]);
}
