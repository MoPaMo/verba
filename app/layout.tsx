import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import ThemeToggle from "@/components/ThemeToggle";
export const metadata: Metadata = {
  title: "Verba - AI Language Learning",
  description: "Learn languages the fun way with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background font-sans antialiased transition-colors duration-300">
          <div className="absolute right-4 top-4 hidden sm:block ">
            <ThemeToggle />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
