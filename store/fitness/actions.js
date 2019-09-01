import { actionTypes } from 'constants';
import { defaultAction } from 'store/defaultActions';
import * as fitnessApi from './api';


export const getFitness = (data, callbacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.GET_FITNESS,
    apiCall: () => { return fitnessApi.getFitness(data, getState().user.token) },
    onSuccess: (response) => ({ fitness: response.fitness }),
    onError: (response) => ({ errorMessage: response.message }),
    callbacks: callbacks,
  })
}

export const getFitnesses = (callbacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.GET_FITNESSES,
    apiCall: () => { return fitnessApi.getFitnesses(getState().user.token) },
    onSuccess: (response) => ({ fitnesses: response.fitness_centres }),
    onError: (response) => ({ errorMessage: response.message }),
    callbacks: callbacks,
  })
}

export const getSports = (callbacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.GET_SPORTS,
    apiCall: () => { return fitnessApi.getSports(getState().user.token) },
    onSuccess: (response) => ({ sports: response.sport_types }),
    onError: (response) => ({ errorMessage: response.message }),
    callbacks: callbacks,
  })
}

export const getTrainings = (data, callbacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.GET_TRAININGS,
    apiCall: () => { return fitnessApi.getTrainings(data, getState().user.token) },
    onSuccess: (response) => ({ trainings: response.trainings }),
    onError: (response) => ({ errorMessage: response.message }),
    callbacks: callbacks,
  })
}
