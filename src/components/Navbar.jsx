import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaCode, FaSun, FaMoon } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <FaCode className="text-blue-400" />
          <h1 className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Ayush Poojari
          </h1>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-l font-medium">
          <a
            href="#work"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#project-showcase"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Project Showcase
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl hover:text-blue-400 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-blue-400 hover:bg-blue-500 text-black dark:text-white font-semibold text-sm px-4 py-2 rounded-md"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
