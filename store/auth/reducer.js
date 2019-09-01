import { combineReducers } from 'redux';
import {LOGIN, SOCIAL_LOGIN, LOGOUT } from '../../constants/actionTypes'

const isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case LOGIN.success:
        case SOCIAL_LOGIN.success:
            return true;
        case LOGOUT.success:
        case LOGOUT.failed:
            return false;
        default:
            return state;
    }
}
const isLoggingIn = (state = false, action) => {
    switch (action.type) {
        case LOGIN.started:
        case SOCIAL_LOGIN.started:
            return true;
        case SOCIAL_LOGIN.failed:
        case LOGIN.failed:
        case LOGIN.success:
        case LOGOUT.success:
            return false;
        default:
            return state;
    }
}


const authReducer = combineReducers({
    isLoggedIn,
    isLoggingIn,
});

export default authReducer;
