import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const CHANGE_FILTER = 'CHANGE_FILTER';


export const updateBounds = (bounds) => {
    return {
        type: UPDATE_BOUNDS,
        bounds
    };
};

export const changeFilter = (filter, value) => ({
    type: CHANGE_FILTER,
    filter,
    value
});

export function updateFilter(filter, value) {
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchBenches(getState().ui.filters)(dispatch);
    };
}
