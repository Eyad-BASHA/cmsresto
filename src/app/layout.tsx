// src/app/layout.tsx
"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} w-full`}>
        <Layout>
          {children}
          <SpeedInsights />
        </Layout>
      </body>
    </html>
  );
}
