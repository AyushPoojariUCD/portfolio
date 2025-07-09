import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const projects = [
  {
    title: "AI Browser Agent",
    description:
      "A privacy-preserving AI assistant that automates everyday web tasks such as ticket booking, form filling, and product search. Built using GPT-4o, Electron, and Playwright, it interprets user prompts, extracts DOM structure, and takes intelligent actions. The agent runs locally, ensuring no sensitive data is shared externally. Modular MCP-based design allows dynamic tool invocation and action planning. Ideal for repetitive workflows and productivity automation.",
    image: "/projects/project-1.png",
    caseStudy: "https://github.com/AyushPoojari/ai-browser-agent",
    website: "https://github.com/AyushPoojari/ai-browser-agent",
  },
  {
    title: "ItsAFeatureNotABug - HR Sync Platform",
    description:
      "A distributed microservices-based HR platform designed for efficient employee data synchronization across organizations. Built with Flask (API Gateway), MongoDB (data store), Kafka (event streaming), and Elasticsearch (analytics), it enables real-time data flow and flexible queries. The system is containerized with Docker and deployed on Kubernetes with Horizontal Pod Autoscalers for resilience. Includes logging, monitoring, and CI/CD support for scalable HR integration.",
    image: "/projects/project-2.png",
    caseStudy: "https://gitlab.com/hhttu/itsafeaturenotabug",
    website: "https://gitlab.com/hhttu/itsafeaturenotabug",
  },
  {
    title: "Traffic Sign Classification",
    description:
      "Developed a CNN-based deep learning model to classify German traffic signs using the GTSRB dataset. The pipeline includes image preprocessing, data augmentation, and model training using Keras/TensorFlow. Achieved high accuracy in recognizing over 40 classes of signs in real-time scenarios. Deployed model for inference and performance evaluation. Useful in autonomous driving systems and intelligent transport solutions.",
    image: "/projects/project-3.png",
    caseStudy:
      "https://github.com/AyushPoojariUCD/Traffic-Signs-Classifications",
    website: "https://github.com/AyushPoojariUCD/Traffic-Signs-Classifications",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek and responsive personal portfolio built using React, Tailwind CSS, and deployed on Netlify. It showcases projects, technical skills, and work experience with animations and typing effects. Implements reusable components, dark mode, and mobile-first design principles. The project demonstrates frontend proficiency and design aesthetics with clean UI/UX. Integrated with GitHub for continuous deployment.",
    image: "/projects/project-4.png",
    caseStudy: "https://github.com/AyushPoojari/portfolio-website",
    website: "https://github.com/AyushPoojari/portfolio-website",
  },
];

const ProjectShowcase = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prev = () => setIndex((index - 1 + projects.length) % projects.length);
  const next = () => setIndex((index + 1) % projects.length);

  return (
    <section
      className="bg-gradient-to-b from-blue-50 to-white dark:from-[#0d1117] dark:to-black text-black dark:text-white py-20 px-6 transition-colors duration-300"
      id="project-showcase"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          <TypeAnimation
            sequence={["Project ", 1000, "Project Showcase", 2000, "", 500]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-blue-600 dark:text-blue-400"
          />
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
          Explore some of my recent work and open-source contributions
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row bg-white dark:bg-[#1a1a1a]">
        {/* Image with fade animation */}
        <div className="md:w-1/2 w-full h-80 md:h-[450px] flex items-center justify-center bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={project.image}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-6 text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={project.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 flex items-center gap-2"
            >
              View Case Study <FaArrowRight />
            </a>

            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm hover:border-blue-400 flex items-center gap-2"
            >
              Visit Website <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          {/* Arrows */}
          <div className="flex justify-between items-center mt-auto">
            <button
              onClick={prev}
              className="bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600 hover:bg-gray-300 p-2 rounded-full"
              aria-label="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              className="bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600 hover:bg-gray-300 p-2 rounded-full"
              aria-label="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* View All Projects */}
      <div className="text-center mt-12">
        <a
          href="/projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-sm hover:bg-blue-600 inline-flex items-center gap-2"
        >
          View All Projects <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default ProjectShowcase;
