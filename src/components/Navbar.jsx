import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            className="h-8 w-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 40"
            fill="none"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>

            <path
              fill="url(#logoGradient)"
              fillRule="evenodd"
              d="M16.011 20.03c-1.807 1.989-2.52 4.901 1.391 6.798 5.51 2.672 18.958 9.383 24.763 12.104 5.36 2.513 5.69-.752 4.662-5.46l-6.13-28.203C39.752 1.302 38.419.31 36.956.205c-2.089-.15-4.488 2.017-6.731 4.342C26.459 8.442 18.235 17.59 16.01 20.03z"
              clipRule="evenodd"
            />

            <path
              fill="#FFFFFF"
              fillRule="evenodd"
              d="M31.276 20.03c1.808 1.988 2.52 4.896-1.39 6.793-1.561.756-3.761 1.84-6.242 3.062a1159.767 1159.767 0 00-6.242-3.062c-3.91-1.897-3.198-4.81-1.39-6.793 1.254-1.382 4.429-4.9 7.632-8.406 3.203 3.505 6.377 7.03 7.632 8.406z"
              clipRule="evenodd"
            />

            <path
              fill="url(#logoGradient)"
              opacity="0.5"
              fillRule="evenodd"
              d="M31.28 20.03c1.807 1.989 2.52 4.901-1.392 6.798-5.51 2.672-18.957 9.384-24.763 12.104-5.36 2.513-5.689-.751-4.662-5.46L6.593 5.27C7.54 1.302 8.872.31 10.336.205c2.088-.15 4.487 2.017 6.73 4.342C20.832 8.442 29.056 17.59 31.28 20.03z"
              clipRule="evenodd"
            />
            <text
              x="55"
              y="26"
              fill={theme === "dark" ? "#FFFFFF" : "#000000"}
              fontSize="22"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              letterSpacing="0.5"
            >
              Ayush Poojari
            </text>
          </svg>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Work", "Project Showcase", "Resume"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative group text-gray-700 dark:text-gray-300 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-lg hover:text-blue-500 transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-blue-400 hover:opacity-90 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-md transition"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          {["Work", "About", "Project Showcase", "Resume"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-blue-500 text-white text-center py-2 rounded-md"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
