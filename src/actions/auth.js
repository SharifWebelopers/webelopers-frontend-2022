import axios from "./axios";

export const register = (params) => {
  return axios().post(`/accounts/register/`, params);
};

export const verify = (params) => {
  return axios().post(`/accounts/verify-email/`, params);
};
