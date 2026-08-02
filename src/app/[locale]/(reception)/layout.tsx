"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import NavDash from "../../../components/layout/NavDash";
import { Sidebar } from "../../../components/layout/Sidebar";
import { readAuthSession } from "@/lib/auth/session";

type ReceptionLayoutProps = {
  children: React.ReactNode;
};

export default function ReceptionLayout({
  children,
}: ReceptionLayoutProps) {
  const router = useRouter();

//   useEffect(() => {
//     const session = readAuthSession();

//     if (!session?.token) {
//       router.replace("/");
//       return;
//     }

//     try {
//       const payload = JSON.parse(
//         atob(session.token.split(".")[1])
//       );

//       const role =
//         payload[
//           "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
//         ];

//       const exp = payload.exp;

//       // انتهت صلاحية التوكن
//       if (Date.now() >= exp * 1000) {
//         router.replace("/");
//         return;
//       }

//       // إذا مو Reception
//       if (role !== "Reception") {
//         router.replace("/");
//         return;
//       }
//     } catch {
//       router.replace("/");
//     }
//   }, [router]);

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      {/* Sidebar */}
      <Sidebar role="reception" />

      {/* Main */}
      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <NavDash
          fullName="Ahmad Khaled"
          role="employee"
        />

        {/* Content */}
        <main className="flex-1 p-2 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}