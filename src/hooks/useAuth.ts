import { useAuthStore } from "@/store/auth.store"

export const useAuth = () => {
  const user = useAuthStore((s) => s.user)
  const setUser = useAuthStore((s) => s.setUser)

  return { user, setUser }
}