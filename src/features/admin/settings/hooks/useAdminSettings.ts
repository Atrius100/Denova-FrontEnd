import { useQuery } from "@tanstack/react-query"
import { fetchAdminSettings } from "../api/settingsApi"

export function useAdminSettings() {
  return useQuery({
    queryKey: ["admin-settings"],
    queryFn: fetchAdminSettings,
    staleTime: 30_000,
  })
}
