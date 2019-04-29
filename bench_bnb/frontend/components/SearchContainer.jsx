import { connect } from 'react-redux';
import Search from './Search';
import { fetchBenches } from '../actions/bench_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        benches: Object.values(state.entities.benches)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBenches: () => dispatch(fetchBenches())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);