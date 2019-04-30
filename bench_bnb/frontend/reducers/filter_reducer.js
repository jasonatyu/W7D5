import { UPDATE_BOUNDS, CHANGE_FILTER } from '../actions/filter_actions';

const _defaultState = {
    bounds: {},
    minSeating: 1,
    maxSeating: 10
};

export const filterReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_BOUNDS:
            return { bounds: action.bounds };
        case CHANGE_FILTER: 
            return Object.assign({}, state, { [action.filter] : action.value });
        default:
            return state;
    }
}
