import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import _ from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import throttle from 'lodash/throttle';
import { User } from './models';

const STATE_ID = 'web-app-state';

const stateWithFunc = (state) => {
  // if (isNode()) return undefined;
  if (!state) state = {}
  return {
    ...state,
    user: {
      ...state.user,
      user: { ...User(), ...(state.user || {}).user },
    }
  }
}

const mergeStates = (state, serverState) => {
  if (!state) return serverState;
  return _.merge(serverState, state);
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_ID);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_ID, serializedState);
  } catch (err) {}
};

export const configureStore = ({ initialState, middleware = [] } = {}) => {
    const devtools =
        typeof window !== 'undefined' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

    const composeEnhancers = devtools || compose;

    const store = createStore(
        rootReducer,
        loadState(),
        composeEnhancers(applyMiddleware(...[thunk].concat(...middleware)))
    );

    const logger = createLogger({
      collapsed: true,
    });

    store.subscribe(
      throttle(() => {
        const state = store.getState();
        saveState({
          auth: {
            isLoggedIn: state.auth.isLoggedIn,
          },
          fitness: {
            // fitness: state.fitness.fitness,
            fitnesses: state.fitness.fitnesses,
            sports: state.fitness.sports,
          },
          user: state.user,
        })
      }, 1000)
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./rootReducer', () =>
                store.replaceReducer(require('./rootReducer').default)
            );
        }
    }

    return store;
};

export default configureStore;
