import axios from "axios";

export const axiosInstance =
  axios.create({
    baseURL:
      "http://denova.somee.com",

    headers: {
      "Content-Type":
        "application/json",
    },

    withCredentials: false,
  });