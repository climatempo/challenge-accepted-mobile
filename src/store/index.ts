import {applyMiddleware, createStore, Store} from 'redux';
import {HistoricState} from './reducer/historic/types';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';
import rootSaga from './reducer/rootSaga';
import {CityState} from './reducer/city/types';
import {ForecastState} from './reducer/forecast/types';

export interface ApplicationState {
    historic: HistoricState;
    city: CityState;
    forecast: ForecastState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
