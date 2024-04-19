"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ScrollArea } from "@/ui/scroll-area";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import sidebar from "@/config/sidebar";
import { cn } from "@/lib/utils";
export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const sidebarData = Object.values(sidebar);

  return (
    <aside
      className={cn(
        "fixed top-14  z-0 -ml-2  h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block",
        className
      )}
    >
      <div className="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
        <ScrollArea className="w-full h-full">
          {sidebarData.map((item) => (
            <div className="mb-4" key={item.title}>
              <h2 className="font-bold text-lg mb-4">{item.title}</h2>
              <motion.ul layout className="flex flex-col gap-2">
                {item.navigator.map((child) => (
                  <motion.li
                    className="hover:underline"
                    whileHover={{
                      scale: 1.05,
                      originX: 0,
                    }}
                    transition={{ duration: 0.2 }}
                    animate={{
                      fontWeight: pathname === `/${child.path}` ? "bold" : "",
                    }}
                    key={child.path}
                  >
                    <Link className="opacity-80" href={`/${child.path}`}>
                      {child.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </ScrollArea>
      </div>
    </aside>
  );
}
