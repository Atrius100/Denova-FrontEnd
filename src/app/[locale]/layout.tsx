import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";

import "./globals.css";

import { ReactQueryProvider } from "@/lib/react-query-provider";
import { PreferencesProvider } from "@/providers/PreferencesProvider";

import arMessages from "@/messages/ar.json";
import enMessages from "@/messages/en.json";

const preferencesBootstrap = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('denova-theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark');}else{d.classList.remove('dark');}var l=localStorage.getItem('denova-locale');if(l==='en'){d.lang='en';d.dir='ltr';}else{d.lang='ar';d.dir='rtl';}}catch(e){}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DENOVA",
  description: "Dental platform for students",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = locale === "ar" ? arMessages : enMessages;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Script id="preferences-bootstrap" strategy="beforeInteractive">
          {preferencesBootstrap}
        </Script>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PreferencesProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </PreferencesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
