import { combineReducers } from 'redux'
import {LOGIN, SOCIAL_LOGIN, LOGOUT, INVALID_TOKEN, GET_PROFILE, UPDATE_PROFILE } from '../../constants/actionTypes'
import { User } from '../models';

const token = (state = "", action) => {
    switch(action.type) {
        case LOGIN.success:
        case SOCIAL_LOGIN.success:
            return action.token
        case LOGOUT.success:
        case INVALID_TOKEN:
            return ""
        default: 
            return state
    }
}

const user = (state = User(), action) => {
    switch(action.type) {
        case LOGIN.success:
        case SOCIAL_LOGIN.success:
        case GET_PROFILE.success:
        case UPDATE_PROFILE.success:
            return User(action.user)
        case LOGOUT.success:
        case INVALID_TOKEN:
            return User()
        default:
            return state
    }
}


const userReducer = combineReducers({
    token,
    user,
})

export default userReducer;
