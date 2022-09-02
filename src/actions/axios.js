import axios from "axios";

function getHeaders() {
  let accessToken = localStorage.getItem("accessToken");
  const headers = {
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  };
  return headers;
}

function refreshAccessToken() {
  return axios.post(`https://webeloperssut.com/api/accounts/token/refresh/`, {
    refresh: localStorage.getItem("refreshToken"),
  });
}

function createAxiosInstance() {
  const instance = axios.create({
    baseURL: "https://webeloperssut.com/api",
    headers: getHeaders(),
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const res = await refreshAccessToken();
          localStorage.setItem("accessToken", res.data.access);
          originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
          return createAxiosInstance()(originalRequest);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

export default createAxiosInstance;
