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
