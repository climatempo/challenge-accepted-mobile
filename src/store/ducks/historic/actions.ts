import {action} from 'typesafe-actions';
import {Historic} from '../../../model/Historic';
import {HistoricTypes} from './types';

export const loadRequest = () => action(HistoricTypes.LOAD_REQUEST);
export const loadSuccess = (data: Historic[]) =>
    action(HistoricTypes.LOAD_SUCCESS, {data});
export const loadFailure = () => action(HistoricTypes.LOAD_FAILURE);
