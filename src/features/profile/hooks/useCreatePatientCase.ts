import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createPatientCaseApi } from "../types/createPatientCase";

export function useCreatePatientCase() {
  return useMutation({
    mutationFn: createPatientCaseApi,

    onError: (error: AxiosError<any>) => {
      console.log(error.response?.data);
      console.log(error.response?.status);
    },
  });
}