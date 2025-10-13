import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/header/Navbar";

export const metadata: Metadata = {
  title: "Navid Salehi",
  icons: {
    icon: "/favicon.png",
  },
  description: "personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <Navbar />
        <main> {children}</main>
      </body>
    </html>
  );
}
