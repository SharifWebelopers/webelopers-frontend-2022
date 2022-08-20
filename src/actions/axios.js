import axios from "axios";
import { SERVER_ROOT_URL } from "../configs";

function getHeaders() {
  let accessToken = sessionStorage.getItem("accessToken");
  const headers = {
    Authorization: accessToken ? `Token ${accessToken}` : "",
  };
  return headers;
}

function createAxiosInstance() {
  const instance = axios.create({
    baseURL: SERVER_ROOT_URL,
    headers: getHeaders(),
  });

  return instance;
}

export default createAxiosInstance;
