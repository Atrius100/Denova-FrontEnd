import { useQuery } from "@tanstack/react-query";
import { getCaseCategories } from "../api/casses";


export const useCaseCategories = () => {
  return useQuery({
    queryKey: ["case-categories"],
    queryFn: getCaseCategories,
  });
};
