import { codes } from '../constants'
import { logout } from './auth/actions'


export const defaultAction = (dispatch, getState, options) => {
  let callbacks = options.callbacks || {};

  dispatch({ type: options.action.started });

  options.apiCall()
    .then(
      response => {
        if(response.status !== 200) {
          dispatch({
            type: options.action.failed,
            errorMessage: "Ошибка #"+response.status,
          })
        } else {
          response
          .text()
          .then(
            value => {

              const responseObject = JSON.parse(value);

              if(responseObject.code === codes.OK) {
 
                dispatch({
                  type: options.action.success,
                  ...options.onSuccess(responseObject),
                })
                if (callbacks.onSuccess) {
                  callbacks.onSuccess(options.onSuccess(responseObject));
                }

              } else {

                dispatch({
                  type: options.action.failed,
                  ...options.onError(responseObject)
                })
                if (callbacks.onError) {
                  callbacks.onError(responseObject.message);
                }
                // check if it is invalid token
                if (responseObject.code === codes.INVALID_TOKEN) {
                  logout()(dispatch, getState);
                }

              }
            }
          )
        }
      },
      error => {
        dispatch({
          type: options.action.failed,
          errorMessage: "Проверьте соеденение"
        })
      }
    )
}
