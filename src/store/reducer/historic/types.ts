import {Historic} from '../../../model/historic/Historic';
// Action types

export enum HistoricTypes {
    LOAD_REQUEST = '@historic/LOAD_REQUEST',
    LOAD_SUCCESS = '@historic/LOAD_SUCCESS',
    LOAD_FAILURE = '@historic/LOAD_FAILURE',
}
// State type

export interface HistoricState {
    readonly data: Historic[];
    readonly loading: boolean;
    readonly error: boolean;
}
