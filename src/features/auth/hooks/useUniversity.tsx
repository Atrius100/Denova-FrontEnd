import { useQuery } from "@tanstack/react-query";
import { getUniversities } from "../api/university";


export function useUniversities() {
  return useQuery({
    queryKey: ["universities"],
    queryFn: getUniversities,
    staleTime: Infinity,
    gcTime: Infinity,
  });
}