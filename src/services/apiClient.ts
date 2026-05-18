import axios from "axios";

import { API_BASE_URL } from "@/config/api";
import { readAuthSession } from "@/lib/auth/session";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const session = readAuthSession();
  const legacyToken =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;
  const token = session?.token ?? legacyToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

/** @deprecated Use default export `api` — kept for existing auth imports */
export const axiosInstance = api;
