import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Start a Project */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Start a Project
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Let’s create your next big idea.
          </p>

          <a
            href="mailto:poojariayush01@gmail.com"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-medium text-white overflow-hidden"
          >
            {/* Gradient Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-90 group-hover:opacity-100 transition"></span>

            {/* Shine Effect */}
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 blur-md transition"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Application Development",
              "Web Development",
              "SaaS Development",
              "AI Integration",
              "Automation & DevOps",
            ].map((item) => (
              <li
                key={item}
                className="relative w-fit text-gray-400 cursor-pointer transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="mailto:poojariayush01@gmail.com"
                className="group flex items-center gap-3 transition"
              >
                <FaEnvelope className="text-blue-400 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                <span className="relative">
                  Email
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all group-hover:w-full"></span>
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ayush-poojari/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition"
              >
                <FaLinkedin className="text-blue-400 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                <span className="relative">
                  LinkedIn
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all group-hover:w-full"></span>
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/AyushPoojariUCD"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition"
              >
                <FaGithub className="text-blue-400 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
                <span className="relative">
                  GitHub
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all group-hover:w-full"></span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Branding */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Ayush Poojari</h3>
          <p className="text-sm text-gray-400">
            Software Developer • Cloud • AI
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ayush Poojari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
