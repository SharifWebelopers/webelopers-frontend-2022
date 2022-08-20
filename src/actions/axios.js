import axios from "axios";

function getHeaders() {
  let accessToken = sessionStorage.getItem("accessToken");
  const headers = {
    Authorization: accessToken ? `Token ${accessToken}` : "",
  };
  return headers;
}

function createAxiosInstance() {
  const instance = axios.create({
    baseURL: "https://webeloperssut.com/api",
    headers: getHeaders(),
  });

  return instance;
}

export default createAxiosInstance;
