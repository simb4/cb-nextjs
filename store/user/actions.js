import { actionTypes } from '../../constants';
import { defaultAction } from '../defaultActions';
import * as userApi from './api';


export const getProfile = (callbacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.GET_PROFILE,
    apiCall: () => { return userApi.getProfile(getState().user.token) },
    onSuccess: (response) => ({ user: response.user }),
    onError: (response) => ({ errorMessage: response.message }),
    callbacks: callbacks,
  })
}

export const updateProfile = (data, callbacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.UPDATE_PROFILE,
    apiCall: () => { return userApi.updateProfile(data, getState().user.token) },
    onSuccess: (response) => ({ user: response.user }),
    onError: (response) => ({ errorMessage: response.message }),
    callbacks: callbacks,
  })
}
