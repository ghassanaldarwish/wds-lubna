import type { Metadata } from "next";

import "./globals.css";

import "@fontsource-variable/open-sans";

export const metadata: Metadata = {
  title: {
    default: "Webdrei UI",
    template: "%s | Webdrei UI",
  },
  description: "A collection of reusable components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[80px] scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
