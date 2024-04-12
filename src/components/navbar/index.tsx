import Button, { cn, buttonVariants } from "@/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-[100vw] bg-background fixed top-0 h-[70px] border-b-2 border-secondary flex  items-center">
      <div className="flex container justify-between">
        <div className="flex gap-6">
          <h1 className="text-3xl font-bold">
            <Link href="/">Webdrei UI</Link>
          </h1>
          <ul className="flex  items-center">
            <li>
              <Link
                href="/components"
                className={cn(buttonVariants({ variant: "link" }))}
              >
                Components
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
