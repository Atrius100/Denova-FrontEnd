import { useQuery } from "@tanstack/react-query";
import { getStudentProfile } from "../types/studentProfile";


export function useStudentProfile() {
  return useQuery({
    queryKey: ["student-profile"],
    queryFn: getStudentProfile,
  });
}