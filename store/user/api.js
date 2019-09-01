import * as API from '../defaultApi';

const getProfileUrl = "auth/profile/";
const updateProfileUrl = "auth/profile/update/";
const uploadImageUrl = "main/image/upload/";

export const getProfile = (token) => (
  API.stdApiGET({ data: {}, token, url: getProfileUrl })
)

export const updateProfile = (data, token) => (
  API.stdApiPOST({ data, token, url: updateProfileUrl })
)

export const uploadImage = (data, token) => (
  API.apiFormData({ withImage: true, data, token, url: uploadImageUrl })
)
