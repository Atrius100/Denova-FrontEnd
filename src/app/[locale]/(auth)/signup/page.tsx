"use client";

import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { AuthForm } from "@/features/auth/components/AuthForm";

import { useSignup } from "@/features/auth/hooks/useSignup";

export default function SignupPage() {
  const router = useRouter();

  const signup = useSignup();

  const [localError, setLocalError] =
    useState("");

const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  university: "",
  academicYear: 1,
  phoneNumber: "",
    nationalId: "",
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


if (form.password !== form.confirmPassword) {
  setLocalError("Passwords do not match.");
  return;
}

const { confirmPassword, ...payload } = form;

signup.mutate(payload, {
  onSuccess: () => {
    router.push(
  `/verify?email=${encodeURIComponent(form.email)}`
);
  },
});
  }

  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={updateField}
      onSubmit={handleSubmit}
      isLoading={signup.isPending}
      error={
        localError ||
        signup.error?.message
      }
    />
  );
}