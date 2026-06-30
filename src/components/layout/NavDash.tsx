"use client";

import { useRouter }
    from "next/navigation";

import {
    useLocale,
    useTranslations,
} from "next-intl";

import {
    Globe,
    LogOut,
} from "lucide-react";

type NavDashProps = {
    fullName: string;
    role: "admin" | "employee" | "student";
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

        <header
            className="
        flex h-16 items-center justify-between

        border-b border-slate-200
        bg-white

        px-3
        sm:px-4
        lg:px-6
      "
        >

            {/* LEFT */}
            <div className="min-w-0">

                {/* فوق 768 */}
                <h1
                    className="
            hidden md:block

            truncate
            text-lg font-semibold text-slate-800

            lg:text-xl
          "
                >

                    {t("dashboard")}
                </h1>
            </div>

            {/* RIGHT */}
            <div
                className="
          flex items-center

          gap-2
          sm:gap-3
          lg:gap-5
        "
            >

                {/* LANGUAGE */}
                <button
                    onClick={toggleLanguage}
                    className="
            flex items-center gap-2

            rounded-xl

            px-2 py-2

            text-xs text-slate-600

            transition
            hover:bg-slate-100
            hover:text-[var(--denova-primary)]

            sm:text-sm
          "
                >

                    <Globe className="h-4 w-4 sm:h-5 sm:w-5" />

                    {/* اخفاء النص تحت 360 */}
                    <span className="hidden sm:block">

                        {locale === "ar"
                            ? t("english")
                            : t("arabic")}
                    </span>
                </button>

                {/* DIVIDER */}
                <div className="hidden h-6 w-px bg-slate-200 sm:block" />

                {/* PROFILE */}
                <div
                    className="
            flex items-center

            gap-2
            sm:gap-3
          "
                >

                    {/* INFO */}
                    <div
                        className="
              
            "
                    >

                        <p
                            className="
                  text-sm font-medium text-slate-800
                "
                        >

                            {fullName}
                        </p>
                        <p className="text-xs text-slate-500">
                            {role === "admin"
                                ? t("admin")
                                : role === "student"
                                    ? t("student")
                                    : t("employee")}
                        </p>
                    </div>

                    {/* AVATAR */}
                    <div
                        className="
              flex items-center justify-center

              h-9 w-9
              rounded-full

              bg-blue-100

              text-xs font-bold uppercase
              text-[var(--denova-primary)]

              sm:h-10 sm:w-10
              sm:text-sm
            "
                    >

                        {firstLetter}
                    </div>
                </div>

                {/* LOGOUT */}
                <button
                    className="
            flex items-center justify-center

            rounded-xl

            p-2

            text-slate-600

            transition
            hover:bg-red-50
            hover:text-red-500
          "
                >

                    <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
            </div>
        </header>
    );
}