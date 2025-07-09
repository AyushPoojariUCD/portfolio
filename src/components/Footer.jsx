import React from "react";
import { FaLinkedin, FaCalendarAlt, FaAward, FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-16 px-6">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Start a Project */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Start a Project
            </h3>
            <p className="text-sm mb-4 text-gray-400">
              Let’s create your next big idea.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition text-sm"
            >
              Get in Touch <FiArrowRight className="ml-2" />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Application Development</li>
              <li>Web Development</li>
              <li>SaaS Development</li>
              <li>AI Integration</li>
              <li>Automation & DevOps</li>
            </ul>
          </div>

          {/* Empty Column for symmetry if 3 sections */}
          <div></div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/ayush-poojari/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaGithub className="text-blue-400" />
                <a
                  href="https://github.com/AyushPoojariUCD/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaCalendarAlt className="text-green-400" />
                <a href="#contact">Schedule a Call</a>
              </li>
              <li className="flex items-center gap-2">
                <FaAward className="text-yellow-500" />
                <a href="#awards">Awards & Achievements</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-xs mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Ayush Poojari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
