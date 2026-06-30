import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";


import { verifyApi, VerifyPayload } from "../api/verifyApi";

export function useVerify() {
  return useMutation({
    mutationFn: (
      data: VerifyPayload
    ) => verifyApi(data),

    onError: (error: AxiosError<any>) => {
      console.log(error.response?.data);
    },
  });
}