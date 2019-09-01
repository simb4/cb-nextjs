import { combineReducers } from 'redux';
import { actionTypes } from 'constants';
import { Fitness, Sport, Training } from 'store/models';

const {
    GET_FITNESSES,
    GET_FITNESS,
    GET_SPORTS,
    GET_TRAININGS,
    ROUTER,
    INVALID_TOKEN,
    LOGOUT,
} = actionTypes;

const sortBy = (val) => (o1, o2) => o1[val] === o2[val] ? 0 : o1[val] < o2[val] ? -1 : 1;

const fitnesses = (state = [], action) => {
    switch (action.type) {
        case GET_FITNESSES.success:
            return (action.fitnesses || [])
                .map(Fitness)
        case LOGOUT.success:
        case INVALID_TOKEN:
            return [];
        default:
            return state;
    }
}

const fitness = (state = {}, action) => {
    switch (action.type) {
        case GET_FITNESS.success:
          return Fitness(action.fitness);
        case ROUTER.LOCATION_CHANGE:
          if (action.payload.state && action.payload.state.fitness)
            return action.payload.state.fitness;
        case LOGOUT.success:
        case INVALID_TOKEN:
            return {};

        default:
            return state;
    }
}

const sports = (state = [], action) => {
    switch (action.type) {
        case GET_SPORTS.success:
          return action.sports.map(Sport);
        case LOGOUT.success:
            return [];
        default:
            return state;
    }
}

const trainings = (state = [], action) => {
    switch (action.type) {
        case GET_TRAININGS.success:
          return action.trainings.map(Training);
        case LOGOUT.success:
            return [];
        default:
            return state;
    }
}

const trainingLoading = (state = false, action) => {
    switch (action.type) {
        case GET_TRAININGS.started:
          return true;
        case GET_TRAININGS.failed:
        case GET_TRAININGS.success:
            return false;
        default:
            return state;
    }
}


const fitnessReducer = combineReducers({
    fitnesses,
    fitness,
    sports,
    trainings,
    trainingLoading,
});

export default fitnessReducer;
