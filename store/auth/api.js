import * as API from 'store/defaultApi';

const loginUrl = "auth/login/email/";
const socialLoginUrl = "auth/login/social/";
const logoutUrl = "auth/logout/";
const forgotPasswordUrl = "auth/password/reset/";
const resetPasswordUrl = "auth/password/set/";
const changePasswordUrl = "auth/password/change/";
const uploadImageUrl = "main/image/upload/";

export const login = (data) => (
  API.stdApiPOST({ data, url: loginUrl })
)

export const social_login = (data) => (
  API.stdApiPOST({ data, url: socialLoginUrl })
)

export const forgotPassword = (data) => (
  API.stdApiPOST({ data, url: forgotPasswordUrl })
)
/* token, new_password */
export const resetPassword = (data) => (
  API.stdApiPOST({ data, url: resetPasswordUrl })
)

export const changePassword = (data, token) => (
  API.stdApiPOST({ token, data, url: changePasswordUrl })
)

export const logout = (token) => (
  API.stdApiPOST({ token, url: logoutUrl })
)

