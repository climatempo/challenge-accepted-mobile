import {Reducer} from 'redux';
import {HistoricState, HistoricTypes} from './types';

const INITIAL_STATE: HistoricState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<HistoricState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HistoricTypes.LOAD_REQUEST:
            return {...state, loading: true};
        case HistoricTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data,
            };
        case HistoricTypes.LOAD_FAILURE:
            return {...state, loading: false, error: true, data: []};
        default:
            return state;
    }
};

export default reducer;
