"use client";
import ChatNavBar from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <div className=" h-screen flex flex-col">
              <ChatNavBar />
              {children}
            </div>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
