"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useVerify } from "@/features/auth/hooks/useverify";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { Spinner } from "@/components/ui/Spinner";


export default function VerifyPage() {
  const router = useRouter();
  const verify = useVerify();

  useEffect(() => {
    verify.mutate(undefined, {
      onSuccess: () => {
        window.setTimeout(() => router.push("/login"), 1500);
      }
    });
  }, []);

  return (
    <AuthCard title="" minimal>
      <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
        {verify.isSuccess ? (
          <>
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-600">
              ✓
            </div>
            <h1 className="mb-2 text-2xl font-bold text-[var(--denova-primary)]">Verified</h1>
            <p className="max-w-64 text-sm leading-6 text-slate-500">
              Your account has been verified. Redirecting you to login...
            </p>
          </>
        ) : (
          <>
            <Spinner />
            <h1 className="mt-8 text-xl font-semibold text-[var(--denova-primary)]">Verifying your account...</h1>
            <p className="mt-3 max-w-64 text-sm leading-6 text-slate-500">
              Please wait while we securely process your registration details...
            </p>
          </>
        )}
      </div>
    </AuthCard>
  );
}