import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";


import "./globals.css";



import arMessages
  from "./../../messages/ar.json";

import enMessages
  from "./../../messages/en.json";
import ReactQueryProvider from "../../lib/react-query-provider";
import { NextIntlClientProvider } from "next-intl";

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

  description:
    "Dental platform for students",
};

export default async function RootLayout({
  children,

  params,
}: {
  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;
}) {

  const { locale } =
    await params;

  const messages =
    locale === "ar"
      ? arMessages
      : enMessages;

  return (
    <html
      lang={locale}
      dir={
        locale === "ar"
          ? "rtl"
          : "ltr"
      }
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}