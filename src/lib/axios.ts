import axios from "axios"
import { API_BASE_URL } from "@/config/api"
import { readAuthSession } from "@/lib/auth/session"

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
})

axiosInstance.interceptors.request.use((config) => {
  const session = readAuthSession()
  const legacyToken =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null
  const token = session?.token ?? legacyToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})