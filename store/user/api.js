import * as API from '../defaultApi';

const getProfileUrl = "auth/profile/";
export const getProfile = (token) => (
  API.stdApiGET({ data: {}, token, url: getProfileUrl })
)

const updateProfileUrl = "auth/profile/update/";
export const updateProfile = (data, token) => (
  API.stdApiPOST({ data, token, url: updateProfileUrl })
)
