import api from "./apiClient"

export const getCases = () => api.get("/cases")