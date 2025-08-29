import type { Metadata } from "next";
import React from "react";
import "@/src/app/globals.css";

export const metadata: Metadata = {
  title: "Vardhanya",
  description: "Vardhanya home",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
