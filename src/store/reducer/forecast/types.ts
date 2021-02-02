import {Forecast} from '../../../model/forecast/Forecast';

// Action types
export enum ForecastTypes {
    LOAD_REQUEST = '@forecast/LOAD_REQUEST',
    LOAD_SUCCESS = '@forecast/LOAD_SUCCESS',
    LOAD_FAILURE = '@forecast/LOAD_FAILURE',
    LOAD_LOCALSTORAGE_REQUEST = '@forecast/LOAD_LOCALSTORAGE_REQUEST',
}

// State types

export interface ForecastState {
    readonly data: Forecast;
    readonly loading: boolean;
    readonly error: boolean;
}
