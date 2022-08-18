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
