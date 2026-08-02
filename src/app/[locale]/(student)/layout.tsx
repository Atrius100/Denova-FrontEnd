"use client";

import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Sidebar } from "@/components/layout/Sidebar";
import { readAuthSession } from "@/lib/auth/session";

export default function StudentLayout({
  children,
}: PropsWithChildren) {
  const router = useRouter();

useEffect(() => {
  const session = readAuthSession();

  if (!session?.token) {
    router.replace("/");
    return;
  }

  try {
    const payload = JSON.parse(
      atob(session.token.split(".")[1])
    );

    const role =
      payload[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];

    const exp = payload.exp;

    // انتهت صلاحية التوكن
    if (Date.now() >= exp * 1000) {
      router.replace("/");
      return;
    }

    // مو طالب
    if (role !== "Student") {
      router.replace("/");
      return;
    }
  } catch {
    router.replace("/");
  }
}, [router]);

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Sidebar role="student" />

      <main className="min-w-0 flex-1 p-2 lg:p-6">
        {children}
      </main>
    </div>
  );
}