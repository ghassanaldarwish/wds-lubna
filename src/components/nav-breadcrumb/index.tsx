"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function NavBreadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  console.log(paths);
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {paths.map((path, index) => (
          <>
            <BreadcrumbItem key={index}>
              {index === paths.length - 1 ? (
                <BreadcrumbPage>{path}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={`/${path}`}>{path}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index !== paths.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
