import { useQuery } from "@tanstack/react-query";
import { getStudentCases } from "../types/studentCases";

export function useStudentCases() {
  return useQuery({
    queryKey: ["student-cases"],
    queryFn: getStudentCases,
  });
}