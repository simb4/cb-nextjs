import { combineReducers } from 'redux';

import app from './app/reducer';
import auth from './auth/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
  auth,
  app,
  user,
});

export default rootReducer;
