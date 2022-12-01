import React from "react";
import { BsStars } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import useDarkMode from "../hooks/useDarkMode";

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun className="btn-top" />
      ) : (
        <FaMoon className="btn-top" />
      )}
    </span>
  );
};

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-20 w-full justify-between bg-white p-6 dark:bg-black">
      {/* <Pages /> */}
      <p className="text-2xl font-bold text-black dark:text-emerald-300">
        Home
      </p>
      <div className="flex items-center space-x-3">
        <ThemeIcon />
        <HiOutlineRefresh className="btn-top duration-400 hover:rotate-90 active:scale-125" />
        <BsStars className="btn-top duration-400 mt-1.5" />
      </div>
    </div>
  );
};

export default Navbar;
