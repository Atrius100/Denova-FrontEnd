"use client";

import { useRouter }
    from "next/navigation";

import { useLocale, useTranslations }
    from "next-intl";

import {
    Bell,
    Globe,
    LogOut,
} from "lucide-react";

type NavDashProps = {
    fullName: string;

    role: "admin" | "employee";
};

export default function NavDash({
    fullName,
    role,
}: NavDashProps) {

    const t =
        useTranslations(
            "receptionNavbar"
        );

    const locale =
        useLocale();

    const router =
        useRouter();

    const firstLetter =
        fullName.charAt(0);

    function toggleLanguage() {

        const nextLocale =
            locale === "ar"
                ? "en"
                : "ar";

        const pathname =
            window.location.pathname;

        const newPath =
            pathname.replace(
                /^\/(ar|en)/,
                `/${nextLocale}`
            );

        router.push(newPath);
    }

    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">

            {/* Left */}
            <div>

                <h1 className="text-xl font-semibold text-slate-800">
                    {t("dashboard")}
                </h1>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">

                {/* Language */}
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-[var(--denova-primary)]"
                >

                    <Globe className="h-5 w-5" />

                    <span>
                        {locale === "ar"
                            ? t("english")
                            : t("arabic")}
                    </span>
                </button>

                {/* Notifications */}
                <button className="relative text-slate-600 transition hover:text-[var(--denova-primary)]">

                    <Bell className="h-5 w-5" />

                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
                </button>

                {/* Divider */}
                <div className="h-6 w-px bg-slate-200" />

                {/* Profile */}
                <div className="flex items-center gap-3">

                    <div className="text-right">

                        <p className="text-sm font-medium text-slate-800">
                            {fullName}
                        </p>

                        <p className="text-xs text-slate-500">
                            {role === "admin"
                                ? t("admin")
                                : t("employee")}
                        </p>
                    </div>

                    {/* Avatar */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold uppercase text-[var(--denova-primary)]">

                        {firstLetter}
                    </div>
                </div>

                {/* Logout */}
                <button className="text-slate-600 transition hover:text-red-500">

                    <LogOut className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
}