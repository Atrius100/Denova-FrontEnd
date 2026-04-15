import api from "./apiClient"

export const login = (data: {
  email: string
  password: string
}) => {
  return api.post("/auth/login", data)
}

export const register = (data: any) => {
  return api.post("/auth/register", data)
}