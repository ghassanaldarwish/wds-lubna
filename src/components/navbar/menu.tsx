import { Menu as MenuIcon } from "lucide-react";
import React from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import Sidebar from "../sidebar";
export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent" variant="outline">
          <MenuIcon size={32} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
