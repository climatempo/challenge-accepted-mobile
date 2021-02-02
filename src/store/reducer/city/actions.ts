import {action} from 'typesafe-actions';
import {City} from '../../../model/city/City';
import {CityTypes} from './types';

export const searchRequest = (query: string) =>
    action(CityTypes.SEARCH_REQUEST, {query});
export const searchSuccess = (data: City[]) =>
    action(CityTypes.SEARCH_SUCCESS, {data});
export const searchFailure = () => action(CityTypes.SEARCH_FAILURE);
