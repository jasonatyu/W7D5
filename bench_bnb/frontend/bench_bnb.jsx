import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
import { loginUser, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.loginUser = loginUser;
    window.logout = logout; 
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store} />, root);
});