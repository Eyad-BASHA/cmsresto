"use client";

import type { Metadata } from "next";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import RecaptchaLoader from "./components/RecaptchaLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMSRESTO",
  description: "CMS pour les Restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} w-full`}>
        <RecaptchaLoader />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
