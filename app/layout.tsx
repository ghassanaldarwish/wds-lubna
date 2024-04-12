import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@fontsource-variable/open-sans";
export const metadata: Metadata = {
  title: "Webdrei UI",
  description: "A collection of reusable components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[70px] container min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
