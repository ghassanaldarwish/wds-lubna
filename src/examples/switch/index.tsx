"use client";
import React, { useEffect, useRef, forwardRef, useState } from "react";
//https://codesandbox.io/p/sandbox/framer-motion-variants-rj7ks0?file=%2Fsrc%2FApp.tsx%3A52%2C13&from-embed=
import { Switch } from "@/ui/switch";

//import { useSpring, animated } from "@react-spring/web";
import { useAnimate, motion } from "framer-motion";
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function SwitchDemo() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <motion.div
      className="flex not-prose peer p-[0.2rem] rounded-2xl w-[2.3rem] h-[1.2rem] cursor-pointer  border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[isOn=true]:bg-primary data-[isOn=false]:bg-input data-[isOn=true]:justify-end data-[isOn=false]:justify-start"
      data-isOn={isOn}
      onClick={toggleSwitch}
    >
      <motion.div
        className=" rounded-full w-[0.8rem] h-[0.8rem] bg-background shadow-lg"
        layout
        transition={spring}
      />
    </motion.div>
  );
}
