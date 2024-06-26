import navbar from "@/config/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Menu from "./menu";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "w-[100vw] z-10 bg-background fixed top-0 h-[70px] border-b-2 border-secondary flex  items-center",
        className
      )}
    >
      <div className="flex container justify-between">
        <div className="flex justify-between w-full">
          <div className="flex gap-6 items-center">
            <h1 className="text-lg md:text-3xl font-bold">
              <Link href="/">{navbar.logo.text}</Link>
            </h1>
            <ul className="flex  items-center gap-4">
              {navbar.navigator.map((nav) => (
                <li key={nav.title}>
                  <Link href={`/${nav.path}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
}
