import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Software Developer",
    company: "Auxilium Groups, Mumbai, India",
    period: "July 2023 – August 2024",
    points: [
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, Python, and PHP.",
      "Built dynamic web applications with React.js and Angular; integrated APIs using Node.js and Express.",
      "Worked with databases including MySQL and MongoDB to support scalable backend infrastructure.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Eduskills Foundation, India",
    period: "September 2021 - December 2021",
    points: [
      "Built and optimized ML models on AWS SageMaker, improving prediction accuracy by 15%.",
      "Developed an automated pipeline for data preprocessing using Pandas and NumPy, enhancing ML efficiency by 20%.",
      "Trained and fine-tuned a sentiment analysis model, achieving a 92% accuracy rate.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Sahu Technologies Pvt. Ltd, Mumbai, India",
    period: "June 2021 - August 2021",
    points: [
      "Implemented automated scripts for data transformation using Pandas, reducing processing time by 50%.",
      "Conducted unit testing using PyTest to ensure robust application performance.",
      "Developed an API service in Flask to streamline ETL and improve integration with existing systems.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Dcodetech, Mumbai, India",
    period: "May 2019 - August 2019",
    points: [
      "Built responsive web pages with optimized HTML, CSS, and JavaScript, improving page speed by 15%.",
      "Conducted usability testing with Selenium, increasing user engagement by 20%.",
      "Implemented AJAX-based dynamic content loading to improve website responsiveness.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#020617] to-[#0f172a] text-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          Work Experience
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Line → left on mobile, center on desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-indigo-600 md:-translate-x-1/2"></div>

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex">
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-10 md:h-10 transform md:-translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                    <FaBriefcase className="text-white text-xs md:text-sm" />
                  </div>

                  {/* Card */}
                  <div
                    className={`group w-full md:w-[45%] ml-12 md:ml-0 p-5 sm:p-6 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 
                    shadow-xl transition-all duration-300 
                    hover:scale-[1.02] hover:shadow-blue-500/20 
                    hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-indigo-600/20 
                    hover:border-blue-400/40
                    ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                  >
                    {/* Header */}
                    <div className="mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition">
                        {exp.role}
                      </h3>
                      <span className="text-xs sm:text-sm text-blue-400">
                        {exp.period}
                      </span>
                    </div>

                    {/* Company */}
                    <p className="text-xs sm:text-sm italic text-gray-400 mb-3 sm:mb-4">
                      {exp.company}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-white/10 mb-3 sm:mb-4"></div>

                    {/* Points */}
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3">
                          <span className="text-blue-500 mt-1 text-[10px] sm:text-xs">
                            ●
                          </span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
