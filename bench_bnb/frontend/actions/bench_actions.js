import * as BenchAPIUtils from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    };
};

export const fetchBenches = () => dispatch => (
    BenchAPIUtils.fetchBenches().then((benches) => dispatch(receiveBenches(benches)))
);