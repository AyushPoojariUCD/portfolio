import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  // 🔥 Custom smooth scroll (slow + premium)
  const smoothScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.offsetTop;
    const duration = 4000; // ⏱️ increase = slower scroll
    let startTime = null;

    const easeInOut = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animateScroll = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, start + (end - start) * easeInOut(percent));

      if (progress < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

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

          {/* CTA */}
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
              onClick={() => smoothScroll("projectshowcase")}
              className="border border-blue-500 px-6 py-3 rounded-lg text-sm hover:border-blue-600 transition"
            >
              View Projects
            </button>
          </motion.div>

          {/* Social */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/ayush-poojari/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg 
    bg-gray-100 dark:bg-[#1d1d1d] 
    border border-gray-300 dark:border-[#2a2a2a]

    hover:bg-blue-600 hover:text-white 
    hover:border-blue-600

    dark:hover:bg-blue-500/20 dark:hover:border-blue-500
    dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]

    transform hover:-translate-y-1 hover:scale-[1.03]
    transition-all duration-300 text-sm"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/AyushPoojariUCD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg 
    bg-gray-100 dark:bg-[#1d1d1d] 
    border border-gray-300 dark:border-[#2a2a2a]

    hover:bg-gray-800 hover:text-white 
    hover:border-gray-800

    dark:hover:bg-white/10 dark:hover:border-gray-400
    dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]

    transform hover:-translate-y-1 hover:scale-[1.03]
    transition-all duration-300 text-sm"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://leetcode.com/u/AyushPoojari/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg 
    bg-gray-100 dark:bg-[#1d1d1d] 
    border border-gray-300 dark:border-[#2a2a2a]

    hover:bg-yellow-500 hover:text-black 
    hover:border-yellow-500

    dark:hover:bg-yellow-400/20 dark:hover:border-yellow-400
    dark:hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]

    transform hover:-translate-y-1 hover:scale-[1.03]
    transition-all duration-300 text-sm"
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
          whileHover={{ rotateY: 8, rotateX: 4 }}
          className="relative perspective-1000"
        >
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="relative overflow-hidden rounded-xl group bg-black">
              <img
                src="/profile.gif"
                alt="Profile"
                className="w-[260px] sm:w-[320px] md:w-[400px] rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 pointer-events-none">
                <div className="glare-effect"></div>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-lg p-4 rounded-xl text-white text-xs sm:text-sm flex items-center gap-3 shadow-lg">
            <div>
              <strong>Software Engineer</strong>
              <br />
              Full Stack • AI • Cloud
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🔥 Scroll Indicator (fixed) */}
      <div
        onClick={() => smoothScroll("resume")}
        className="cursor-pointer text-center mt-16 text-gray-600 dark:text-gray-400 text-sm"
      >
        <div className="inline-block border rounded-full p-2 animate-bounce">
          <div className="w-1 h-4 bg-gray-400 rounded-full mx-auto"></div>
        </div>
        <p className="mt-2">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
