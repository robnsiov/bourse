import localFont from "next/font/local";
const morabba = localFont({
  src: [
    {
      path: "../public/fonts/Morabba/webfont/fonts/woff2/Morabba-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/Morabba/webfont/fonts/woff2/Morabba-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Morabba/webfont/fonts/woff2/Morabba-Medium.woff2",
      weight: "500",
    },
  ],
});

import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/components/providers/react-query";
import RecoilProvider from "@/components/providers/recoil";
import RootProvider from "@/components/providers/root";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${morabba.className}`} dir="rtl">
        <RootProvider>
          <RecoilProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </RecoilProvider>
        </RootProvider>
      </body>
    </html>
  );
}
