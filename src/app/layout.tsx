import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import { ReactQueryProvider } from "@/lib/react-query-provider";
import { PreferencesProvider } from "@/providers/PreferencesProvider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Script id="preferences-bootstrap" strategy="beforeInteractive">
          {preferencesBootstrap}
        </Script>
        <PreferencesProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </PreferencesProvider>
      </body>
    </html>
  );
}