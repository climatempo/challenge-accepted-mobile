import {combineReducers} from 'redux';
import historic from './historic';
import city from './city';
import forecast from './forecast';

export default combineReducers({
    historic,
    city,
    forecast,
});
