import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import app from './app/reducer';
import auth from './auth/reducer';
import fitness from './fitness/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
  auth,
  app,
  fitness,
  router,
  user,
});

export default rootReducer;
