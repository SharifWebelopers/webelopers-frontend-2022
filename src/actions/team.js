import axios from "./axios";

export const createTeam = (params) => {
  return axios().post("/teams/crud/", params);
};

export const updateTeam = (id, params) => {
  return axios().patch(`/teams/crud/${id}`, params);
};

export const deleteTeam = (id) => {
  return axios().delete(`/teams/crud/${id}`);
};

export const getTeam = (params) => {
  return axios().get("/teams/crud");
};

export const requestRandomTeammate = () => {
  return axios().post("/teams/request_team/");
};

export const getRequestRandomTeammate = () => {
  return axios().get("/teams/request_team/");
};

export const deleteRequestRandomTeammate = () => {
  return axios().delete("/teams/request_team/");
};

export const findTeammates = () => {
  return axios().get(`/accounts/emails/`);
};

export const getTeamRequests = () => {
  return axios().get(`/accounts/team_requests/`);
};

export const getSentInvitations = () => {
  return axios().get(`/teams/invitations/sent/`);
};

export const sendInvitation = (params) => {
  return axios().post(`/teams/invitations/sent/`, params);
};
