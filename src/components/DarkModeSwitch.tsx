"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  /*  if (!isMounted) {
    return null;
  } */
  return (
    <>
      {isMounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="cursor-pointer text-2xl hover:text-amber-500"
          />
        ) : (
          <BsFillMoonFill
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-2xl hover:text-amber-500"
          />
        ))}
    </>
  );
}
