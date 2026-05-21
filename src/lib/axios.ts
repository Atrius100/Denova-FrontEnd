import axios from "axios";

export const axiosInstance =
  axios.create({
    baseURL:
      "git pull origin main",

    headers: {
      "Content-Type":
        "application/json",
    },

    withCredentials: false,
  });