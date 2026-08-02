"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Sidebar } from "@/components/layout/Sidebar";
import NavDash from "@/components/layout/NavDash";
import { AdminNotificationProvider } from "@/features/admin/notifications/providers/AdminNotificationProvider";
import { readAuthSession } from "@/lib/auth/session";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  // useEffect(() => {
  //   const session = readAuthSession();

  //   if (!session?.token) {
  //     router.replace("/");
  //     return;
  //   }

  //   try {
  //     const payload = JSON.parse(
  //       atob(session.token.split(".")[1])
  //     );

  //     const role =
  //       payload[
  //         "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
  //       ];

  //     const exp = payload.exp;

  //     // انتهت صلاحية التوكن
  //     if (Date.now() >= exp * 1000) {
  //       router.replace("/");
  //       return;
  //     }

  //     // إذا مو Admin
  //     if (role !== "Admin") {
  //       router.replace("/");
  //       return;
  //     }
  //   } catch {
  //     router.replace("/");
  //   }
  // }, [router]);

  return (
    <AdminNotificationProvider>
      <div className="flex min-h-screen bg-[#f5f7fb]">
        <Sidebar role="admin" />

        <div className="flex min-w-0 flex-1 flex-col">
          <NavDash
            fullName="Admin User"
            role="admin"
          />

          <main className="flex-1 p-2 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </AdminNotificationProvider>
  );
}