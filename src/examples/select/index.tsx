"use client";
import React, { useEffect, useRef, forwardRef, useState } from "react";
//https://codesandbox.io/p/sandbox/framer-motion-variants-rj7ks0?file=%2Fsrc%2FApp.tsx%3A52%2C13&from-embed=
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
//import { useSpring, animated } from "@react-spring/web";
import { useAnimate, motion } from "framer-motion";

export default function SelectDemo() {
  return (
    <Select>
      <motion.div>
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
      </motion.div>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
