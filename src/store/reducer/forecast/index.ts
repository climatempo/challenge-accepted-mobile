import {Reducer} from 'redux';
import {ForecastState, ForecastTypes} from './types';

const INITIAL_STATE: ForecastState = {
    data: {
        city: '',
        items: [],
    },
    loading: false,
    error: false,
};

const reducer: Reducer<ForecastState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ForecastTypes.LOAD_REQUEST:
            return {...state, loading: true};
        case ForecastTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data,
            };
        case ForecastTypes.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: {city: '', items: []},
            };
        default:
            return state;
    }
};

export default reducer;
