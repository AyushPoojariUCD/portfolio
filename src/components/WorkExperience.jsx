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
    <section className="bg-black text-white py-16 px-6" id="work">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="relative border-l border-gray-700 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-white text-xs" />
              </div>

              {/* Content Box */}
              <div className="bg-[#1a1a1a] p-6 rounded-md shadow-md">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-sm italic text-gray-300 mb-4">
                  {exp.company}
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
