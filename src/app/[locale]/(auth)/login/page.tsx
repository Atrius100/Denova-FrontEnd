"use client";

import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { AuthForm } from "@/features/auth/components/AuthForm";

import { useLogin } from "@/features/auth/hooks/useLogin";
import { saveAuthProfile, saveAuthToken } from "@/lib/auth/session";

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
      onSuccess: (data: Record<string, unknown>) => {
        const token =
          (typeof data.token === "string" && data.token) ||
          (typeof data.accessToken === "string" && data.accessToken) ||
          "";

        if (!token) {
          setLocalError("لم يُرجع الخادم رمز الدخول. تواصل مع فريق الباك.");
          return;
        }

        saveAuthToken(token);

        const studentId =
          (typeof data.studentId === "string" && data.studentId) ||
          (typeof data.userId === "string" && data.userId) ||
          undefined;
        const universityId =
          (typeof data.universityId === "string" && data.universityId) ||
          (typeof data.studentUniversityId === "string" &&
            data.studentUniversityId) ||
          undefined;

        saveAuthProfile({ studentId, universityId });

        router.push("/");
        router.refresh();
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