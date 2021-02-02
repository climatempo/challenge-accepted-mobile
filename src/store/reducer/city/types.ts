import {City} from '../../../model/city/City';

// Action types
export enum CityTypes {
    SEARCH_REQUEST = '@city/SEARCH_REQUEST',
    SEARCH_SUCCESS = '@city/SEARCH_SUCCESS',
    SEARCH_FAILURE = '@city/SEARCH_FAILURE',
}

// State types

export interface CityState {
    readonly data: City[];
    readonly loading: boolean;
    readonly error: boolean;
}
