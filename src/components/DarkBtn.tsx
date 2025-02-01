"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const DarkBtn = () => {
  const { theme, setTheme } = useTheme();

  const toggleFn = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <Button
          onClick={toggleFn}
          className="bg-transparent hover:bg-transparent border-0 shadow-none">
          <Sun
            className="text-2xl scale-0 rotate-90 dark:scale-100 dark:rotate-0 text-black dark:text-white"
            style={{ width: "30px", height: "30px" }}
          />
          <Moon
            className="text-2xl absolute rotate-0 scale-100 dark:scale-0 dark:rotate-90 text-black dark:text-white"
            style={{ width: "30px", height: "30px" }}
          />
        </Button>
      </div>
    </>
  );
};
export default DarkBtn;
