import api from "./apiClient"

export const createPayment = (data: {
  phone: string
  amount: number
}) => {
  return api.post("/payments/create", data)
}

export const verifyPayment = (id: string) => {
  return api.get(`/payments/${id}`)
}