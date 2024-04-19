"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ScrollArea } from "@/ui/scroll-area";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import sidebar from "@/config/sidebar";
import { cn } from "@/lib/utils";
export default function Sidebar() {
  const listRef = React.useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const sidebarData = Object.values(sidebar);
  useEffect(() => {
    if (!listRef.current) return;

    const links = listRef.current.querySelectorAll("li[data-path]");
    links.forEach((link) => {
      if (link.getAttribute("data-path") === pathname) {
        link.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }, [pathname]);

  return (
    <aside className="w-[300px] z-0  py-4  h-[100vh] sticky top-[70px]">
      <ScrollArea className="w-full h-full ">
        {sidebarData.map((item) => (
          <div className="mb-4" key={item.title}>
            <h2 className="font-bold mb-2">{item.title}</h2>
            <motion.ul layout className="" ref={listRef}>
              {item.navigator.map((child) => (
                <motion.li
                  data-path={`/${child.path}`}
                  animate={{
                    fontWeight: pathname === `/${child.path}` ? "bold" : "",
                  }}
                  key={child.path}
                >
                  <Link className="hover:underline" href={`/${child.path}`}>
                    {child.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </ScrollArea>
    </aside>
  );
}
