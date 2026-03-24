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
    title: "Solve 400+ Problems in our In-house Environment",
    desc: "A distributed microservices-based HR platform designed for efficient employee data synchronization across organizations. Built with Flask (API Gateway), MongoDB (data store), Kafka (event streaming), and Elasticsearch (analytics), it enables real-time data flow and flexible queries. The system is containerized with Docker and deployed on Kubernetes with Horizontal Pod Autoscalers for resilience. Includes logging, monitoring, and CI/CD support for scalable HR integration.",
    image: "/projects/project-2.png",
  },
  {
    name: "Traffic Sign Classification",
    icon: "lucide:trending-up",
    color: "#D00180",
    title: "Track your progress with real-time insights",
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
  },
  {
    name: "Webinars",
    icon: "lucide:tv",
    color: "#22AEFF",
    title: "Industry-led webinars & career guidance",
    desc: "Learn from experts about projects, resumes, and real-world practices.",
    image: "/projects/project-1.png",
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section
      className="py-20 px-4 transition-colors duration-500 bg-white dark:bg-[#020617] text-black dark:text-white"
      id="project"
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

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src={current.image}
              alt={current.name}
              className="rounded-xl shadow-xl w-full object-cover"
            />

            {/* Glow Effect */}
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
