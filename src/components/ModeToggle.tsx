"use client";

// import {useState} from "react"
import { useTheme } from "next-themes";
import Moon from "@/components/moon";

const ModeToggle: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <label className="inline-flex items-center cursor-pointer ml-3">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        />
        <div className="relative w-11 h-6 bg-gray3 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cwhite dark:peer-focus:ring-cpurple rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-cwhite after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-cwhite after:border-cwhite after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-cwhite peer-checked:bg-cpurple"></div>
      </label>
      <Moon className="stroke-gray3 h-6 w-6 dark:stroke-cpurple" />
    </>
  );
};

export default ModeToggle;
