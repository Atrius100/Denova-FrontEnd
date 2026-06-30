import { axiosInstance } from "@/lib/axios";

export type University = {
  id: number;
  name: string;
  nameAr: string;
};

export async function getUniversities() {
  const { data } = await axiosInstance.get<University[]>(
    "/Universities"
  );

  return data;
}