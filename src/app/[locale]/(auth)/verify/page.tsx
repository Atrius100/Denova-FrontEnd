"use client";



import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { AuthCard } from "@/features/auth/components/AuthCard";
import { FormEvent, useState } from "react";
import { InputField } from "@/features/auth/components/InputFailed";
import { useResendVerification } from "@/features/auth/hooks/useResendVerification";
import { useVerify } from "@/features/auth/hooks/useverify";


export default function VerifyPage() {


const verify = useVerify();
  const searchParams = useSearchParams();
const resend = useResendVerification();
const [form, setForm] = useState({
  email: searchParams.get("email") ?? "",
  code: "",
});
  
  const router = useRouter();


function handleSubmit(
  event: FormEvent<HTMLFormElement>
) {
  event.preventDefault();


  verify.mutate(form, {
    onSuccess: (data) => {
      console.log("VERIFY SUCCESS", data);
      router.replace("/login");
    },
    onError: (error) => {
      console.log("VERIFY ERROR", error);
    },
  });
}

function handleResend() {
  console.log("Resend:", form.email);

  resend.mutate(
    { email: form.email },
    {
      onSuccess: (data) => {
        console.log("RESEND SUCCESS", data);
      },
      onError: (error) => {
        console.log("RESEND ERROR", error);
      },
    }
  );
}
  return (
   <AuthCard title="Verify Account" minimal>
  <form
  onSubmit={handleSubmit}
  className="mt-3 md:mt-6 flex w-full flex-col gap-3 md:gap-5"
>
    <InputField
  id="email"
  label="Email"
  type="email"
  value={form.email}
  onChange={(e) =>
    setForm({
      ...form,
      email: e.target.value,
    })
  }
/>

<InputField
  id="code"
  label="Verification Code"
  value={form.code}
  onChange={(e) =>
    setForm({
      ...form,
      code: e.target.value,
    })
  }
/>
{verify.isError && (
      <p className="text-sm text-red-600">
        {verify.error?.message}
      </p>
    )}

    <button
  type="submit"
  disabled={verify.isPending}
  className="
    h-11
    rounded-xl
    bg-gradient-to-br
    from-[#2563eb]
    to-[#1e3a6d]
    text-white
    shadow-lg
    shadow-blue-500/20
    transition
    hover:opacity-90
    disabled:cursor-not-allowed
    disabled:opacity-70
  "
>
  {verify.isPending
    ? "Verifying..."
    : "Verify Account"}
</button>
<p className="text-center text-sm text-slate-500">
  Didn't receive the code?{" "}

  <button
    type="button"
    onClick={handleResend}
    className="font-semibold text-primary hover:underline"
  >
    Resend Code
  </button>
</p>
  </form>
</AuthCard>
  );
}