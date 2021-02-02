import {action} from 'typesafe-actions';
import {Historic} from '../../../model/historic/Historic';
import {HistoricTypes} from './types';

export const loadRequest = () => action(HistoricTypes.LOAD_REQUEST);
export const loadSuccess = (data: Historic[]) =>
    action(HistoricTypes.LOAD_SUCCESS, {data});
export const loadFailure = () => action(HistoricTypes.LOAD_FAILURE);

export const setHistoricRequest = (item: Historic) =>
    action(HistoricTypes.SET_HISTORIC_REQUEST, {item});

export const removeHistoricRequest = () =>
    action(HistoricTypes.REMOVE_HISTORIC_REQUEST);
