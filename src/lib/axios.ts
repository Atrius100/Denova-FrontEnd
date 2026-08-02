import axios from "axios";
import {
  clearAuthSession,
  readAuthToken,
} from "./auth/session";

export const axiosInstance = axios.create({
  baseURL: "http://denova.somee.com/api",

  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: false,
});

// Request
axiosInstance.interceptors.request.use((config) => {
  const token = readAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Response
axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (
      error.response?.status === 401 ||
      error.response?.status === 403
    ) {
      clearAuthSession();

      window.location.replace("/");
    }

    return Promise.reject(error);
  }
);