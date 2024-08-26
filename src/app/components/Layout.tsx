"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { UserProvider } from "@/context/UserContext";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UserProvider>
      <div className="layout w-full">
        <Header />
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default Layout;
