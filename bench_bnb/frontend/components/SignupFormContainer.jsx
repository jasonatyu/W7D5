import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './SessionForm';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'signup'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);