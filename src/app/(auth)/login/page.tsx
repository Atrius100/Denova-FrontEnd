"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { InputField } from "@/features/auth/components/InputFailed";
import { PasswordField } from "@/features/auth/components/PassworedFailed";

import { useLogin } from "@/features/auth/hooks/useLogin";
import Button from "@/features/auth/components/ButtonAuth";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login.mutate({ email, password });
  }

  return (
    <AuthCard title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="dr.smith@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          icon={<Mail aria-hidden="true" className="h-5 w-5" />}
          required
        />
        <PasswordField
          id="password"
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {login.isError ? (
          <p className="text-sm text-red-600" role="alert">
            {login.error.message}
          </p>
        ) : null}
        {login.isSuccess ? (
          <p className="text-sm text-primary" role="status">
            Login successful. Welcome back to DENOVA.
          </p>
        ) : null}
        <Button type="submit" isLoading={login.isPending} loadingText="Signing in...">
          Login to Portal →
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-primary transition hover:text-secondary">
          Create an account
        </Link>
      </p>
    </AuthCard>
  );
}
