"use client";
import Nav from "@/components/nav/Nav";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setOpen] = useState<boolean>(false);
  function openSideBar() {
    setOpen(!isOpen);
  }

  return (
    <html lang="en">
      <body>
        <Header onClick={openSideBar} />
        <Nav isOpen={isOpen} onClick={openSideBar} />
        <section className=" container mx-auto pt-11 ">{children}</section>
      </body>
    </html>
  );
}
