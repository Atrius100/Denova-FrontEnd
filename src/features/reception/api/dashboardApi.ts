import { axiosInstance }
from "@/lib/axios";
import { DashboardStats } from "../../../types/resption";




export async function getDashboardStats() {

  const response =
    await axiosInstance.get<DashboardStats>(
      "/api/reception/dashboard"
    );

  return response.data;
}