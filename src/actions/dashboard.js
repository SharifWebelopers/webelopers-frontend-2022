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

export const getStages = () => {
  return axios().get(`/dashboard/stages/`);
};

export const getTickets = () => {
  return axios().get(`/dashboard/tickets/`);
}

export const submitTicket = (params) => {
  return axios().post(`/dashboard/tickets/`, params);
}

export const getVideoTutorials = () => {
  return axios().get("/knowledge/videos/");
}

export const getDocumentTutorials = () => {
  return axios().get("/knowledge/pdf/");
}
