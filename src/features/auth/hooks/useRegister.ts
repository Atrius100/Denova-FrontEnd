import { register } from "@/services/auth.service"

export const useRegister = () => {
  const handleRegister = async (data :any) => {
    return await register(data)
  }

  return { handleRegister }
}