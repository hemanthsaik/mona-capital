"use client";
import React from "react";
import { useTheme } from "next-themes";

const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={() =>
          currentTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
      />
      <div
        className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 ${
          currentTheme === "dark"
            ? "dark:peer-focus:ring-blue-800 dark:bg-gray-700"
            : ""
        } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
          currentTheme === "dark" ? "dark:border-gray-600" : ""
        } peer-checked:bg-blue-600 rounded-full`}
      ></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        <p> {currentTheme === "dark" ? "Light" : "Dark"} Mode</p>
      </span>
    </label>
  );
};

export default ToggleButton;
