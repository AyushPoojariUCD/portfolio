import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-white to-gray-100 dark:from-[#000000] dark:to-[#0f0f0f] text-black dark:text-white py-20 px-6 overflow-hidden transition-colors duration-500"
      id="about"
    >
      {/* Background blur */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl z-0 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left section */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
            ● Available for Projects
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Building{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Modern Software Applications
            </span>{" "}
            <br className="hidden md:block" />
            infused with{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Artificial Intelligence
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-sm md:text-base text-gray-700 dark:text-gray-400 max-w-lg mb-4"
          >
            Hi, I’m Ayush Poojari — a full-stack developer blending software
            engineering, AI, and DevOps to build intelligent, scalable, and
            elegant systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4"
          >
            <a
              href="https://www.ucd.ie/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-700 px-4 py-2 rounded-full text-xs font-medium tracking-wider shadow-md hover:shadow-lg transition">
                🎓 MSc in Computer Science @ University College Dublin
              </span>
            </a>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-blue-500 text-sm px-6 py-3 rounded-lg text-black dark:text-white hover:border-blue-600 transition"
            >
              Resume
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("project-showcase")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-blue-500 text-sm px-6 py-3 rounded-lg text-black dark:text-white hover:border-blue-600 transition"
            >
              View Projects
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/ayush-poojari/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-[#1d1d1d] hover:bg-blue-800 text-black dark:text-white text-xs py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/AyushPoojariUCD"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-[#1d1d1d] hover:bg-gray-800 text-black dark:text-white text-xs py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <button className="bg-gray-100 dark:bg-[#1d1d1d] hover:bg-yellow-600 text-black dark:text-white text-xs py-2 px-4 rounded-lg flex items-center gap-2">
              <BsTrophy /> Hackathons
            </button>
            <button className="bg-gray-100 dark:bg-[#1d1d1d] hover:bg-blue-600 text-black dark:text-white text-xs py-2 px-4 rounded-lg flex items-center gap-2">
              <FaGoogle /> Google Business
            </button>
            <button className="bg-gray-100 dark:bg-[#1d1d1d] hover:bg-red-700 text-black dark:text-white text-xs py-2 px-4 rounded-lg flex items-center gap-2">
              <MdOutlineDesignServices /> Design Rush
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-[320px] md:w-[400px] rounded-xl shadow-lg"
          />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 backdrop-blur-lg p-4 rounded-xl text-white text-sm flex items-center gap-3">
            <div>
              ⭐⭐⭐⭐⭐
              <br />
              Experience of <strong>2 years as @SDE</strong>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Prompt */}
      <a href="#work">
        <div className="relative z-10 text-center mt-16 text-gray-700 dark:text-gray-400 text-sm cursor-pointer">
          <div className="inline-block border border-gray-400 dark:border-gray-600 rounded-full p-2 animate-bounce">
            <div className="w-1 h-4 bg-gray-400 rounded-full mx-auto"></div>
          </div>
          <p className="mt-2">Scroll to explore</p>
        </div>
      </a>
    </section>
  );
};

export default Hero;
