import axios from "./axios";

export const register = (params) => {
  return axios().post(`/accounts/register/`, params);
};

export const verify = (params) => {
  return axios().post(`/accounts/verify-email/`, params);
};

export const requestEmailVerification = (params) => {
  return axios().post(`/accounts/request-verify-email/`, params);
};

export const login = (params) => {
  return axios().post(`/accounts/login/`, params);
};

export const sendSocialAuthToken = (socialNetwork, params) => {
  return axios().post(`/socialoauth/${socialNetwork}/`, params);
};

export const requestResetPassword = (params) => {
  return axios().post(`/accounts/request-reset-password/`, params);
};

export const resetPassword = (params) => {
  return axios().post(`/accounts/set-new-password/`, params);
};

export const validateResetPasswordToken = (uid, token) => {
  return axios().get(`/accounts/check-reset-password/${uid}/${token}/`);
};
