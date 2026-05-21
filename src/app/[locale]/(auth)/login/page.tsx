"use client";

import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { AuthForm } from "@/features/auth/components/AuthForm";

import { useLogin } from "@/features/auth/hooks/useLogin";
import {
  saveAuthProfile,
  saveAuthToken,
} from "@/lib/auth/session";

export default function LoginPage() {
  const router = useRouter();

  const login = useLogin();

  const [localError, setLocalError] =
    useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function updateField(
    field: string,
    value: string | number
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setLocalError("");
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    console.log(form);

    login.mutate(form, {
      onSuccess: (data) => {
        const token =
          data?.token ??
          (data as { accessToken?: string })?.accessToken

        if (token) {
          saveAuthToken(token)
        }

        saveAuthProfile({
          studentId:
            (data as { studentId?: string })?.studentId ??
            (data as { userId?: string })?.userId,
          universityId: (data as { universityId?: string })
            ?.universityId,
        })

        router.push("/");
      },
    });
  }

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={updateField}
      onSubmit={handleSubmit}
      isLoading={login.isPending}
      error={
        localError ||
        login.error?.message
      }
    />
  );
}