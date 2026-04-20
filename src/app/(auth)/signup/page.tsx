"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Mail, User } from "lucide-react";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { InputField } from "@/features/auth/components/InputFailed";
import { PasswordField } from "@/features/auth/components/PassworedFailed";
import { useSignup } from "@/features/auth/hooks/useRegister";
import Button from "@/features/auth/components/ButtonAuth";


export default function SignupPage() {
  const router = useRouter();
  const signup = useSignup();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [localError, setLocalError] = useState("");

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setLocalError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }
    signup.mutate(form, {
      onSuccess: () => router.push("/verify")
    });
  }

  return (
    <AuthCard title="Create your account" compact>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <InputField
            id="firstName"
            label="First Name"
            autoComplete="given-name"
            placeholder="John"
            value={form.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            icon={<User aria-hidden="true" className="h-4 w-4" />}
            required
            compact
          />
          <InputField
            id="lastName"
            label="Last Name"
            autoComplete="family-name"
            placeholder="Doe"
            value={form.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            icon={<User aria-hidden="true" className="h-4 w-4" />}
            required
            compact
          />
        </div>
        <InputField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="dr.doe@example.com"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          icon={<Mail aria-hidden="true" className="h-5 w-5" />}
          required
          compact
        />
        <PasswordField
          id="password"
          label="Password"
          autoComplete="new-password"
          value={form.password}
          onChange={(event) => updateField("password", event.target.value)}
          required
          compact
        />
        <PasswordField
          id="confirmPassword"
          label="Confirm Password"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={(event) => updateField("confirmPassword", event.target.value)}
          required
          compact
        />
        {(localError || signup.isError) ? (
          <p className="text-sm text-red-600" role="alert">
            {localError || signup.error?.message}
          </p>
        ) : null}
       
      </form>
      <p className="mt-4 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[var(--denova-primary)] transition hover:text-[var(--denova-secondary)]">
          Login
        </Link>
      </p>
    </AuthCard>
  );
}