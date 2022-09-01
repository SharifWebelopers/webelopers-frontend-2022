import axios from "./axios";

export const getUserInfo = () => {
  return axios().get(`/accounts/profile/`);
};

export const updateUserInfo = (params) => {
  return axios().put(`/accounts/profile/`, params);
};

export const sendCV = (params) => {
  return axios().patch(`/accounts/profile/`, params);
};

export const changePassword = (params) => {
  return axios().post(`/accounts/change-password/`, params);
};
