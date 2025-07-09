import React from "react";
import { FaCode, FaBrain, FaCloud } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdConnectWithoutContact } from "react-icons/md";

const DeliverSection = () => {
  return (
    <section
      className="relative bg-[#0f0f0f] text-white py-20 px-6 overflow-hidden"
      id="contact"
    >
      {/* Background Gradient Blur (Dark only) */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500 opacity-10 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl z-0 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          What I Bring to the Table
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          A blend of engineering, AI, and automation — built to deliver business
          impact.
        </p>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {/* Full-Stack Engineering */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow hover:shadow-blue-500/20 transition">
            <div className="text-blue-400 mb-3">
              <FaCode size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Full-Stack Engineering
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>✅ React, NextJS and VueJS apps</li>
              <li>✅ JavaScript and Typescript with Tailwind for design</li>
              <li>✅ Firebase, OAuth2, JWT for auth</li>
              <li>✅ CI/CD and Deployment</li>
            </ul>
          </div>

          {/* AI + Automation */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow hover:shadow-purple-500/20 transition">
            <div className="text-purple-400 mb-3">
              <FaBrain size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              AI & Browser Automation
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>✅ GPT-4o, Claude & other LLM integration</li>
              <li>✅ Agentic and MCP server client development</li>
              <li>✅ Machine Learning and AI </li>
              <li>✅ MLOPS using MLflow, Sagemaker, Apache DAG</li>
            </ul>
          </div>

          {/* DevOps + Systems */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow hover:shadow-indigo-500/20 transition">
            <div className="text-indigo-400 mb-3">
              <FaCloud size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              System Design & DevOps
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>✅ Docker and Kubernetes with HELM</li>
              <li>✅ Amazon, Azure and GCP deployments</li>
              <li>✅ Messaging with Kafka and RabbitMQ</li>
              <li>✅ Microservices based project</li>
              <li>
                ✅ Github Actions, Jenkins and Terraform for complete
                orchestration
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href=""
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2"
          >
            <FiDownload /> Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-poojari/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2"
          >
            {/* Icon or text here */}
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliverSection;
