import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { changePasswordApi } from "../types/changePassword";


export function useChangePassword() {
  return useMutation({
    mutationFn: changePasswordApi,

    onError: (error: AxiosError<any>) => {
      console.log(
        JSON.stringify(error.response?.data, null, 2)
      );
    },

    onSuccess: (data) => {
      console.log(data);
    },
  });
}