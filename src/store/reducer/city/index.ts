import {Reducer} from 'redux';
import {CityState, CityTypes} from './types';

const INITIAL_STATE: CityState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<CityState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CityTypes.SEARCH_REQUEST:
            return {...state, loading: true};
        case CityTypes.SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data,
            };
        case CityTypes.SEARCH_FAILURE:
            return {...state, loading: false, error: true, data: []};
        default:
            return state;
    }
};

export default reducer;
