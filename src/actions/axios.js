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
    baseURL: "http://130.185.120.219:800",
    headers: getHeaders(),
  });

  return instance;
}

export default createAxiosInstance;
