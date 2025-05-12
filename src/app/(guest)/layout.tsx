import type { Metadata } from "next";
import ClientLayout from "@/components/base/ClientLayout";
import React from "react";

export const metadata: Metadata = {
  title: "HimaGo",
  description: "Book you ride now",
};

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-sans antialiased text-slate-700 bg-white selection:bg-sky-500 selection:text-white overflow-x-hidden">
      <ClientLayout>
        {children}
      </ClientLayout>
    </div>
  );
}
