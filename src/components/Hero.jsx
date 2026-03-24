import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-white to-gray-100 dark:from-[#000000] dark:to-[#0f0f0f] text-black dark:text-white py-20 px-6 overflow-hidden transition-colors duration-500"
      id="about"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* Availability */}
          <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
            ● Available for Opportunities
          </p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Building{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Scalable Software
            </span>{" "}
            & Intelligent{" "}
            <span className="text-blue-600 dark:text-blue-400">AI Systems</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-sm md:text-base text-gray-700 dark:text-gray-400 max-w-lg mb-6"
          >
            Hi, I’m Ayush Poojari — a full-stack developer specializing in
            AI-driven applications, scalable backend systems, and modern web
            technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1-UDv7SgvCvJmArESFxZqIcfz_o7Y0Kqd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition"
            >
              Download Resume
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("project-showcase")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-blue-500 px-6 py-3 rounded-lg text-sm hover:border-blue-600 transition"
            >
              View Projects
            </button>
          </motion.div>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayush-poojari/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-[#1d1d1d] hover:bg-blue-600 hover:text-white transition text-sm"
            >
              <FaLinkedin /> LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AyushPoojariUCD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-[#1d1d1d] hover:bg-gray-800 hover:text-white transition text-sm"
            >
              <FaGithub /> GitHub
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/AyushPoojari/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-[#1d1d1d] hover:bg-yellow-500 hover:text-black transition text-sm"
            >
              <SiLeetcode /> LeetCode
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <img
            src="/profile.gif"
            alt="Profile"
            className="w-[260px] sm:w-[320px] md:w-[400px] rounded-xl shadow-lg"
          />

          {/* Floating Card */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-lg p-4 rounded-xl text-white text-xs sm:text-sm flex items-center gap-3 shadow-lg">
            <div>
              ⭐⭐⭐⭐⭐
              <br />
              <strong>2+ Years Experience as SDE</strong>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a href="#work">
        <div className="text-center mt-16 text-gray-600 dark:text-gray-400 text-sm">
          <div className="inline-block border rounded-full p-2 animate-bounce">
            <div className="w-1 h-4 bg-gray-400 rounded-full mx-auto"></div>
          </div>
          <p className="mt-2">Scroll to explore</p>
        </div>
      </a>
    </section>
  );
};

export default Hero;
