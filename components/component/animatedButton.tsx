"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedButtonProps {
  className: string;
  buttonTextColor?: string;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
  isDisabled?: boolean;
  clickStatus:boolean
  buttonType:"button" | "submit" | "reset" | "undefined";
}

export const AnimatedButton: React.FC<
AnimatedButtonProps
> = ({
  className,
  buttonTextColor,
  changeText,
  initialText,
  buttonType = 'button',
  clickStatus,
  isDisabled
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(clickStatus);
  
  useEffect(() => {
    setIsClicked(clickStatus);
    console.log("envoyé")
  },[clickStatus])

  useEffect(() => {
    setInterval(() => {
        setIsClicked(false);
    }, 7000);
}, [isClicked]);

  return (
    <AnimatePresence mode="wait">
      {isClicked ? (
        <motion.button
          className="relative flex items-center justify-center overflow-hidden rounded-md bg-white p-[10px] outline outline-1 outline-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          type={buttonType}
        >
          <motion.span
            key="action"
            className={`relative block h-full w-full font-semibold`}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className={`relative flex cursor-pointer items-center justify-center rounded-md border-none p-[10px] ${className}`}
          style={{ color: buttonTextColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
