import { axiosInstance } from "@/lib/axios";
import { CaseCategory } from "../types/casesType";


export const getCaseCategories = async () => {
  const { data } = await axiosInstance.get("/CaseCategories");
  return data;
};
