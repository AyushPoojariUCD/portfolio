import React, { useState } from "react";
import { Icon } from "@iconify/react";

const tabs = [
  {
    name: "AI Browser Agent",
    icon: "lucide:layout-grid",
    color: "#00c590",
    title: "Automate all your Daily Task using AI Agent",
    desc: "A privacy-preserving AI assistant that automates everyday web tasks such as ticket booking, form filling, and product search. Built using GPT-4o, Electron, and Playwright, it interprets user prompts, extracts DOM structure, and takes intelligent actions. The agent runs locally, ensuring no sensitive data is shared externally. Modular MCP-based design allows dynamic tool invocation and action planning. Ideal for repetitive workflows and productivity automation.",
    image: "/projects/project-1.png",
  },
  {
    name: "HR Sync Platform",
    icon: "lucide:terminal-square",
    color: "#F5A31E",
    title: "Real-Time HR Data Synchronization Platform",
    desc: "A distributed microservices-based HR platform designed for efficient employee data synchronization across organizations. Built with Flask (API Gateway), MongoDB (data store), Kafka (event streaming), and Elasticsearch (analytics), it enables real-time data flow and flexible queries. The system is containerized with Docker and deployed on Kubernetes with Horizontal Pod Autoscalers for resilience. Includes logging, monitoring, and CI/CD support for scalable HR integration.",
    image: "/projects/project-2.png",
  },
  {
    name: "Traffic Sign Classification",
    icon: "lucide:trending-up",
    color: "#D00180",
    title: "Track real-time traffic sign classification",
    desc: "Developed a CNN-based deep learning model to classify German traffic signs using the GTSRB dataset. The pipeline includes image preprocessing, data augmentation, and model training using Keras/TensorFlow. Achieved high accuracy in recognizing over 40 classes of signs in real-time scenarios. Deployed model for inference and performance evaluation. Useful in autonomous driving systems and intelligent transport solutions.",
    image: "/projects/project-3.png",
  },
  {
    name: "Coding Editor",
    icon: "lucide:radio",
    color: "#8AB45B",
    title: "Interactive live coding editor",
    desc: "A cloud-based collaborative code editor inspired by Replit. Write, run, and share code in multiple languages directly from your browser with real-time collaboration, syntax highlighting and copying code snippet.",
    image: "/projects/project-4.png",
    demo: "https://codesphere-online-ide.vercel.app/",
  },
  {
    name: "Pathfinding Visualizer",
    icon: "lucide:tv",
    color: "#22AEFF",
    title: "Interactive Algorithm Visualizer",
    desc: "An interactive pathfinding algorithm visualizer built with React, NextJS, and Node.js. Explore how popular algorithms like A* (A-Star), Dijkstra, BFS, and DFS work step-by-step in real-time on a customizable grid.",
    image: "/projects/project-1.png",
    github:
      "https://github.com/AyushPoojariUCD/pathfinding-algorithm-visualizer",
    demo: "https://pathfinding-algorithm-visualizer-rx.vercel.app/",
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section
      className="py-20 px-4 transition-colors duration-500 bg-white dark:bg-[#020617] text-black dark:text-white"
      id="projectshowcase"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-2">
            My Project Showcase
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Explore my latest{" "}
            <span className="text-blue-500 dark:text-blue-400">Projects</span>
          </h2>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg border transition-all ${
                active === i
                  ? "text-black dark:text-white font-semibold shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
              style={{
                borderColor: active === i ? tab.color : "rgba(0,0,0,0.1)",
                background: active === i ? `${tab.color}30` : "transparent",
              }}
            >
              <Icon icon={tab.icon} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div
          className="relative grid md:grid-cols-2 gap-10 items-center 
          bg-gray-100 dark:bg-white/5 
          border border-gray-200 dark:border-white/10 
          rounded-2xl p-8 backdrop-blur-lg overflow-hidden transition"
        >
          {/* LEFT */}
          <div>
            <h3
              className="text-sm uppercase font-semibold mb-2"
              style={{ color: current.color }}
            >
              {current.name}
            </h3>

            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              {current.title}
            </h4>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {current.desc}
            </p>

            {/* 🔥 SINGLE BUTTON */}
            <a
              href={current.demo || current.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold 
  bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
  shadow-lg overflow-hidden group transition-all duration-300 
  hover:scale-105 hover:shadow-blue-500/30"
            >
              {/* ✨ Shine effect */}
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="shine"></span>
              </span>

              {/* Text */}
              <span className="relative z-10 flex items-center gap-2">
                {current.demo ? "Live Demo" : "View Code"}

                {/* Arrow animation */}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src={current.image}
              alt={current.name}
              className="rounded-xl shadow-xl w-full object-cover"
            />

            {/* Glow */}
            <div
              className="absolute bottom-0 right-0 w-40 h-40 blur-[120px] rounded-full opacity-40"
              style={{ background: current.color }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
