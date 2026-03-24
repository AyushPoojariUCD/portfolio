import React from "react";

const Resume = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 px-4 sm:px-6 flex items-center justify-center text-center bg-gray-100 dark:bg-[#0f172a] transition-colors duration-500"
      id="resume"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-white dark:from-[#0f172a] dark:via-[#020617] dark:to-black opacity-90"></div>

      {/* Decorative Blur Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Ribbon */}
      <div className="absolute top-5 left-[-40px] z-20">
        <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm sm:text-base font-semibold py-2 shadow-xl transform -rotate-45 text-center w-[150px] sm:w-[180px] tracking-wide">
          Resume
        </span>
      </div>

      {/* Content Card */}
      <div className="relative max-w-2xl w-full flex flex-col items-center gap-6 sm:gap-8 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-2xl shadow-xl border border-white/20">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Download My <span className="text-blue-500 italic">Resume</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-xl">
          Get a quick overview of my skills, experience, and projects. Download
          my resume and explore how I can add value to your team.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-2">
          <Stat number="2+" label="Years Experience" />
          <Stat number="20+" label="Projects Built" />
          <Stat number="10+" label="Technologies" />
        </div>

        {/* CTA Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1-UDv7SgvCvJmArESFxZqIcfz_o7Y0Kqd"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 sm:mt-6 inline-flex items-center justify-center px-8 sm:px-10 h-12 sm:h-14 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

const Stat = ({ number, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-blue-500 text-lg sm:text-xl font-semibold">
      {number}
    </span>
    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
      {label}
    </span>
  </div>
);

export default Resume;
