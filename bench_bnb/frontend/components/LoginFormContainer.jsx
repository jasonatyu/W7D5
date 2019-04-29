import { connect } from 'react-redux';
import { loginUser } from '../actions/session_actions';
import SessionForm from './SessionForm';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'login'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        processForm: (user) => dispatch(loginUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);