import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function page() {
  const locale = useLocale();
  const t = useTranslations("studentProfile");

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/40">
        <h1 className="text-3xl font-semibold text-slate-900">{t("title")}</h1>
        <p className="mt-3 text-slate-600">{t("description")}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-blue-100/80 bg-blue-50/80 p-6">
            <h2 className="text-lg font-semibold text-slate-900">{t("infoHeading")}</h2>
            <p className="mt-2 text-sm text-slate-600">{t("infoText")}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">{t("newCaseHeading")}</h2>
            <p className="mt-2 text-sm text-slate-600">{t("newCaseText")}</p>
            <Link
              href={`/${locale}/casesStudent`}
              className="mt-6 inline-flex rounded-full bg-[linear-gradient(135deg,var(--denova-primary),#0f2540)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              {t("addCaseButton")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
