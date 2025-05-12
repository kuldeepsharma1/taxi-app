import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/base/ClientLayout";
import React from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himachal Ride",
  description: "Book you ride now",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="font-sans antialiased text-slate-700 bg-white selection:bg-sky-500 selection:text-white overflow-x-hidden">
          <ClientLayout>
            {children}
         
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}
