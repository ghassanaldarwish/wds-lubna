import type { Metadata } from "next";
import "../mdx.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NavBreadcrumb from "@/components/nav-breadcrumb";

export const metadata: Metadata = {
  title: {
    default: "Components",
    template: "%s | Webdrei UI",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const components = Array.from(Array(100).keys());
  // use scrool component from shdcn
  return (
    <>
      <Navbar />

      <div className="container mt-[70px] flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar className="hidden md:block" />
        <main className="py-4 w-full pl-8">
          <NavBreadcrumb />
          <div> {children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
}
