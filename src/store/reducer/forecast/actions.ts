import {action} from 'typesafe-actions';
import {Forecast} from '../../../model/forecast/Forecast';
import {ForecastTypes} from './types';

export const loadRequest = (id: number) =>
    action(ForecastTypes.LOAD_REQUEST, {id});
export const loadSuccess = (data: Forecast) =>
    action(ForecastTypes.LOAD_SUCCESS, {data});
export const loadFailure = () => action(ForecastTypes.LOAD_FAILURE);
