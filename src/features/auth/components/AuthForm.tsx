"use client";

import Link from "next/link";

import {
    Mail,
    User,
    GraduationCap,
    Calendar,
    ChevronDown,
} from "lucide-react";

import { useTranslations } from "next-intl";

import { InputField } from "./InputFailed";

import { PasswordField } from "./PassworedFailed";

import Button from "./ButtonAuth";

import { AuthCard } from "./AuthCard";

type AuthFormProps = {
    type: "login" | "signup";

    form: {
        firstName?: string;
        lastName?: string;
        email: string;
        password: string;
        confirmPassword?: string;

        university?: string;

        academicYear?: number;
    };

    onChange: (
        field: string,
        value: string | number
    ) => void;

    onSubmit: (
        event: React.FormEvent<HTMLFormElement>
    ) => void;

    isLoading?: boolean;

    error?: string | null;
};

const academicYears = [4, 5];

export function AuthForm({
    type,
    form,
    onChange,
    onSubmit,
    isLoading,
    error,
}: AuthFormProps) {
    const t = useTranslations("auth");

    const isSignup = type === "signup";

    const universities = [
        t("universities.damascus"),
        t("universities.tishreen"),
        t("universities.aleppo"),
        t("universities.baath"),
    ];

    return (
        <AuthCard
            title={
                isSignup
                    ? t("createAccount")
                    : t("welcomeBack")
            }
            compact={isSignup}
        >
            <form
                onSubmit={onSubmit}
                className="space-y-2 md:space-y-4"
            >
                {/* Signup Fields */}
                {isSignup && (
                    <>
                        {/* Names */}
                        <div className="grid grid-cols-2 gap-2 lg:gap-3">
                            <InputField
                                id="firstName"
                                label={t("firstName")}
                                placeholder="John"
                                value={form.firstName}
                                onChange={(event) =>
                                    onChange(
                                        "firstName",
                                        event.target.value
                                    )
                                }
                                icon={
                                    <User className="h-4 w-4" />
                                }
                                compact
                                required
                            />

                            <InputField
                                id="lastName"
                                label={t("lastName")}
                                placeholder="Doe"
                                value={form.lastName}
                                onChange={(event) =>
                                    onChange(
                                        "lastName",
                                        event.target.value
                                    )
                                }
                                icon={
                                    <User className="h-4 w-4" />
                                }
                                compact
                                required
                            />
                        </div>

                        {/* University + Academic Year */}
                        <div className="grid grid-cols-2 gap-2 lg:gap-3">
                            {/* University */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-[var(--denova-primary)]">
                                    {t("university")}
                                </label>

                                <div className="relative">
                                    <GraduationCap className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                                    <select
                                        value={
                                            form.university || ""
                                        }
                                        onChange={(event) =>
                                            onChange(
                                                "university",
                                                event.target.value
                                            )
                                        }
                                        className="h-10 w-full appearance-none rounded-xl border border-blue-100 bg-white/55 pl-10 pr-10 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                                        required
                                    >
                                        <option value="">
                                            {t("selectUniversity")}
                                        </option>

                                        {universities.map(
                                            (uni) => (
                                                <option
                                                    key={uni}
                                                    value={uni}
                                                >
                                                    {uni}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                            </div>

                            {/* Academic Year */}
                            <div className="space-y-1 lg:space-y-1.5">
                                <label className="text-sm font-medium text-[var(--denova-primary)]">
                                    {t("academicYear")}
                                </label>

                                <div className="relative">
                                    <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                                    <select
                                        value={
                                            form.academicYear || ""
                                        }
                                        onChange={(event) =>
                                            onChange(
                                                "academicYear",
                                                Number(
                                                    event.target.value
                                                )
                                            )
                                        }
                                        className="h-10 w-full appearance-none rounded-xl border border-blue-100 bg-white/55 pl-10 pr-10 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                                        required
                                    >
                                        <option value="">
                                            {t("selectYear")}
                                        </option>

                                        {academicYears.map(
                                            (year) => (
                                                <option
                                                    key={year}
                                                    value={year}
                                                >
                                                    {t("year")} {year}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Email */}
                <InputField
                    id="email"
                    label={t("email")}
                    type="email"
                    placeholder="dr@example.com"
                    value={form.email}
                    onChange={(event) =>
                        onChange(
                            "email",
                            event.target.value
                        )
                    }
                    icon={
                        <Mail className="size-4" />
                    }
                    compact={isSignup}
                    required
                />

                {/* Passwords */}
                <div
                    className={`${isSignup
                            ? "grid grid-cols-2 gap-2 lg:gap-3"
                            : ""
                        }`}
                >
                    <PasswordField
                        id="password"
                        label={t("password")}
                        value={form.password}
                        onChange={(event) =>
                            onChange(
                                "password",
                                event.target.value
                            )
                        }
                        compact={isSignup}
                        required
                    />

                    {isSignup && (
                        <PasswordField
                            id="confirmPassword"
                            label={t("confirmPassword")}
                            value={
                                form.confirmPassword
                            }
                            onChange={(event) =>
                                onChange(
                                    "confirmPassword",
                                    event.target.value
                                )
                            }
                            compact
                            required
                        />
                    )}
                </div>

                {/* Error */}
                {error ? (
                    <p className="text-sm text-red-600">
                        {error}
                    </p>
                ) : null}

                {/* Button */}
                <Button
                    type="submit"
                    isLoading={isLoading}
                    loadingText={
                        isSignup
                            ? t("creating")
                            : t("signingIn")
                    }
                    className="bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] shadow-lg shadow-blue-500/20"
                >
                    {isSignup
                        ? t("signup")
                        : t("login")}
                </Button>
            </form>

            {/* Footer */}
            <p className="mt-2 text-center text-sm text-slate-500 md:mt-4">
                {isSignup
                    ? t("alreadyHaveAccount")
                    : t("dontHaveAccount")}{" "}
                <Link
                    href={
                        isSignup
                            ? "/login"
                            : "/signup"
                    }
                    className="font-semibold text-primary"
                >
                    {isSignup
                        ? t("login")
                        : t("createAccount")}
                </Link>
            </p>
        </AuthCard>
    );
}