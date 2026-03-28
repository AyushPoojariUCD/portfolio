import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Software Developer",
    company: "Auxilium Groups, Mumbai, India",
    period: "July 2023 – August 2024",
    points: [
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, Python, and PHP.",
      "Built dynamic web applications with React.js and Angular; integrated APIs using Node.js and Express.",
      "Worked with MySQL and MongoDB for scalable backend systems.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Eduskills Foundation, India",
    period: "September 2021 - December 2021",
    points: [
      "Built ML models on AWS SageMaker, improving accuracy by 15%.",
      "Automated data pipelines using Pandas and NumPy (+20% efficiency).",
      "Developed sentiment analysis model with 92% accuracy.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Sahu Technologies Pvt. Ltd, Mumbai, India",
    period: "June 2021 - August 2021",
    points: [
      "Reduced processing time by 50% using Pandas automation.",
      "Performed unit testing using PyTest.",
      "Built Flask APIs for ETL pipelines.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Dcodetech, Mumbai, India",
    period: "May 2019 - August 2019",
    points: [
      "Improved page speed by 15% with optimized frontend.",
      "Enhanced engagement by 20% using Selenium testing.",
      "Implemented AJAX-based dynamic content loading.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-[#020617] to-[#0f172a] text-white py-20 px-6"
      id="work"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-indigo-600 md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex"
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 transform md:-translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                    <FaBriefcase className="text-white text-sm" />
                  </div>

                  {/* Card */}
                  <div
                    className={`group w-full md:w-[45%] ml-12 md:ml-0 p-6 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 
                    shadow-xl transition-all duration-300 
                    hover:scale-[1.03] hover:shadow-blue-500/20 
                    hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-indigo-600/20 
                    hover:border-blue-400/40
                    ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                  >
                    {/* Header */}
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-blue-400">
                        {exp.period}
                      </span>
                    </div>

                    {/* Company */}
                    <p className="text-sm italic text-gray-400 mb-4">
                      {exp.company}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-white/10 mb-4"></div>

                    {/* Points */}
                    <ul className="space-y-3 text-sm text-gray-300">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-500 mt-1 text-xs">●</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
