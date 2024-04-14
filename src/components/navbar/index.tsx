import { cn } from "@/lib/utils";
import { buttonVariants, Button } from "@/ui/button";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
export default function Navbar() {
  return (
    <nav className="w-[100vw] bg-background fixed top-0 h-[70px] border-b-2 border-secondary flex  items-center">
      <div className="flex container justify-between">
        <div className="flex gap-6">
          <h1 className="text-3xl font-bold">
            <Link href="/">Webdrei UI</Link>
          </h1>
          <ul className="flex  items-center">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple"></SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
          <Link href="/components/background-particles/absorbers">
            Absorbers
          </Link>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>{" "}
                <SelectItem value="apple">
                  <Link href="/components/background-particles/absorbers">
                    Absorbers
                  </Link>
                </SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  );
}
