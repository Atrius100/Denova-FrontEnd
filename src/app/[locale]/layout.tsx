import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";

import arMessages from "./../../messages/ar.json";
import enMessages from "./../../messages/en.json";

import ReactQueryProvider from "../../lib/react-query-provider";

import { PreferencesProvider } from "@/providers/PreferencesProvider";

const themeBootstrap = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('denova-theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark');}else{d.classList.remove('dark');}}catch(e){}})();`;

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages =
    locale === "ar"
      ? arMessages
      : enMessages;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Theme bootstrap script is moved to head.tsx to run before rendering */}

        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <PreferencesProvider>
            <ReactQueryProvider>
              {children}
            </ReactQueryProvider>
          </PreferencesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}