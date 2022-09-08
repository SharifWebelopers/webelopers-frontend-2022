import axios from "./axios";

export const getUserInfo = () => {
  return axios().get(`/accounts/profile/`);
};

export const updateUserInfo = (params) => {
  return axios().patch(`/accounts/profile/`, params);
};

export const changePassword = (params) => {
  return axios().post(`/accounts/change-password/`, params);
};

export const getNotifs = () => {
  return axios().get(`/dashboard/announcements/`);
};
