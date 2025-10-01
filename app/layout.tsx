import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { FakeAuthProvider } from "@/lib/fake-auth";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ADVANCE by DARLA",
  description: "Civilian-accessible engineering moonshots. Transparent, measurable, patriotic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dark-bg text-white">
      <body className={`${orbitron.variable} ${inter.variable} font-inter antialiased`}>
        <FakeAuthProvider>
          <Header />
          <div className="pt-16">{children}</div>
        </FakeAuthProvider>
      </body>
    </html>
  );
}
