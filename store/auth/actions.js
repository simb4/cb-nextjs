import { actionTypes } from 'constants';
import { defaultAction } from 'store/defaultActions';
import * as authApi from './api';


export const login = (data, callbacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.LOGIN,
    apiCall: () => { return authApi.login(data) },
    onSuccess: (response) => ({
      user: response.user,
      token: response.token,
    }),
    onError: (response) => ({ errorMessage: response.message }),
    callbacks: callbacks,
  })
}

export const social_login = (data, callbacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.SOCIAL_LOGIN,
    apiCall: () => { return authApi.social_login(data) },
    onSuccess: (response) => ({
      user: response.user,
      token: response.token,
    }),
    onError: (response) => ({ errorMessage: response.message }),
    callbacks: callbacks,
  })
}

export const logout = () => (dispatch, getState) => {
  const action = actionTypes.LOGOUT;

  dispatch({ type: action.started });

  authApi.logout()
    .then(
      response => {
        if(response.status !== 200) {
          dispatch({
            type: action.failed,
            errorMessage: "Ошибка #"+response.status,
          })
        } else {
          response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              dispatch({
                type: action.success,
                backend: responseObject.code === 0,
              })
            }
          )
        }
      },
      error => {
        dispatch({
          type: action.success,
          backend: false,
        })
      }
    )
}
