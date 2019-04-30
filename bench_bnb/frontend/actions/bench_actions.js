import * as BenchAPIUtils from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    };
};

export const receiveBench = (bench) => {
    return {
        type: RECEIVE_BENCH,
        bench
    };
};

export const fetchBenches = (filters) => dispatch => (
    BenchAPIUtils.fetchBenches(filters).then((benches) => dispatch(receiveBenches(benches)))
);

export const createBench = (bench) => dispatch => (
    BenchAPIUtils.createBench(bench).then((bench) => dispatch(receiveBench(bench)))
);