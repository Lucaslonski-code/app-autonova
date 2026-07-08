
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";

import "./globals.css";

import { AuthProvider } from "@/contexts/AuthContext";

const orbitron = Orbitron({

  subsets: ["latin"],

  weight: ["500", "600", "700"],

  display: "swap"

});

export const metadata: Metadata = {
  title: "Autonova",
  description: "Plataforma Autonova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={orbitron.className}
    >
      <body className={orbitron.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
