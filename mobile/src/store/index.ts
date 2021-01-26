import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {ILocaleState} from './modules/locales/types';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';

import rootSaga from './modules/rootSaga';

const persistConfig = {
  key: 'root',
  storage,
};

export interface IState {
  locale: ILocaleState;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
