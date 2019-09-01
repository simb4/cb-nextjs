export const SETLOCALE = 'app/set-locale';
export const INVALID_TOKEN = 'ACTION_INVALID_TOKEN';
export const ROUTER = {
  LOCATION_CHANGE: '@@router/LOCATION_CHANGE',
}

/* ================ */
/*  AUTH ACTIONS    */
/* ================ */

export const LOGIN = {
  success: 'LOGIN_SUCCESS',
  failed: 'LOGIN_FAILED',
  started: 'LOGIN_STARTED',
}

export const SOCIAL_LOGIN = {
  success: 'SOCIAL_LOGIN_SUCCESS',
  failed: 'SOCIAL_LOGIN_FAILED',
  started: 'SOCIAL_LOGIN_STARTED',
}

export const LOGOUT = {
  success: 'LOGOUT_SUCCESS',
  failed: 'LOGOUT_FAILED',
  started: 'LOGOUT_STARTED',
}

export const UPLOAD_IMAGE = {
  success: 'UPLOAD_IMAGE_SUCCESS',
  failed: 'UPLOAD_IMAGE_FAILED',
  started: 'UPLOAD_IMAGE_STARTED',
}

/* ================ */
/*  USER ACTIONS    */
/* ================ */

export const GET_PROFILE = {
  started: "GET_PROFILE_STARTED",
  success: "GET_PROFILE_SUCCESS",
  failed: "GET_PROFILE_FAILED", 
}

export const UPDATE_PROFILE = {
  started: "UPDATE_PROFILE_STARTED",
  success: "UPDATE_PROFILE_SUCCESS",
  failed: "UPDATE_PROFILE_FAILED", 
}

/* =================== */
/*  FITNESS ACTIONS    */
/* =================== */

export const SELECT_FITNESS = "SELECT_FITNESS";

export const GET_FITNESS = {
  started: "GET_FITNESS_STARTED",
  success: "GET_FITNESS_SUCCESS",
  failed: "GET_FITNESS_FAILED",  
}

export const GET_FITNESSES = {
  started: "GET_FITNESSES_STARTED",
  success: "GET_FITNESSES_SUCCESS",
  failed: "GET_FITNESSES_FAILED",
}

export const GET_SPORTS = {
  started: "GET_SPORTS_STARTED",
  success: "GET_SPORTS_SUCCESS",
  failed: "GET_SPORTS_FAILED",
}

export const GET_TRAININGS = {
  started: "GET_TRAININGS_STARTED",
  success: "GET_TRAININGS_SUCCESS",
  failed: "GET_TRAININGS_FAILED",
}
