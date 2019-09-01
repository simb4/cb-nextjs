import * as API from 'store/defaultApi';

const getFitnessUrl = "main/fitness/";
const getFitnessesUrl = "main/fitness_centres/";
const getSportsUrl = "main/sport_types/";
const getTrainingsUrl = "main/trainings/";

export const getFitness = (data, token) => (
  API.stdApiGET({ token, url: `${getFitnessUrl}${data.fitness_id}/` })
)

export const getFitnesses = (token) => (
  API.stdApiGET({ data: {}, token, url: getFitnessesUrl })
)

export const getSports = (token) => (
  API.stdApiGET({ token, url: getSportsUrl })
)

export const getTrainings = (data, token) => (
  API.stdApiGET({ data, token, url: getTrainingsUrl })
)
